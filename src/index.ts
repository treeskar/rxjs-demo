import './sass/index.scss';
import {
  BehaviorSubject,
  fromEvent,
  filter,
  map,
  withLatestFrom,
  pairwise,
  switchMap,
  startWith,
  of,
  merge,
  Observable,
  from,
  tap, share,
} from './rxjs';
import { Cell, getCell, getCellElement } from './cell';
import {
  ALPHABET,
  cellAddressElement,
  cellsElement,
  errorMessageElement,
  gridElement,
  inputElement,
  NUMBERS,
} from './bootstrap';

document.body.appendChild(gridElement);

const addClass = (element: Element | null, className: string) =>
  element && element.classList.add(className);
const removeClass = (element: Element | null, className: string) =>
  element && element.classList.remove(className);
const toggleClass = (element: Element | null, className: string) =>
  element && element.classList.toggle(className);

// Listen to mouse over and highlight row & column of hovered cell
fromEvent(document.body, 'mousemove')
  .pipe(
    map(({ target }) =>
      target.classList.contains('cell')
        ? { x: target.dataset.id[0], y: target.dataset.id[1] }
        : {}
    ),
    startWith({}),
    pairwise()
  )
  .subscribe(([prevCell, newCell]) => {
    if (prevCell.x !== newCell.x) {
      cellsElement
        .querySelectorAll(
          `.th-x[data-x="${prevCell.x}"], .th-x[data-x="${newCell.x}"]`
        )
        .forEach(cell => toggleClass(cell, 'hover'));
    }
    if (prevCell.y !== newCell.y) {
      cellsElement
        .querySelectorAll(
          `.th-y[data-y="${prevCell.y}"], .th-y[data-y="${newCell.y}"]`
        )
        .forEach(cell => toggleClass(cell, 'hover'));
    }
  });

const getClosestCell = map(({ target }: Event) =>
  (target as HTMLElement).closest('.cell')
);

// Add keyboard navigation
enum KEY_CODES {
  ArrowDown = 'ArrowDown',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  ArrowLeft = 'ArrowLeft',
  Enter = 'Enter',
}

enum MODE {
  VIEW,
  INSERT,
}
// emit start cell edit from input
const isKeydownEnter = filter(
  (event: KeyboardEvent) => event.key === KEY_CODES.Enter
);
const stopEventPropagation = tap((event: Event) => event.stopPropagation());

const insertMode$ = merge(
  fromEvent(inputElement, 'focus'),
  fromEvent(document.body, 'keydown').pipe(isKeydownEnter)
).pipe(
  map(() => MODE.INSERT),
  tap(() => inputElement.focus())
);
const viewMode$ = merge(
  fromEvent(inputElement, 'blur'),
  fromEvent(inputElement, 'keydown').pipe(
    isKeydownEnter,
    stopEventPropagation
  ),
).pipe(
  startWith(null),
  map(() => MODE.VIEW),
  tap(() => cellsElement.focus())
);

const mode$ = merge(insertMode$, viewMode$);
const cellClick$ = fromEvent(cellsElement, 'click').pipe(getClosestCell);
const move$ = mode$.pipe(
  switchMap(mode => mode === MODE.VIEW ? fromEvent<KeyboardEvent>(document.body, 'keydown') : of(null)),
  filter((event) => event && event.key in KEY_CODES),
  stopEventPropagation,
  map((event: KeyboardEvent) => {
    const cell: HTMLElement = cellsElement.querySelector('.cell.focus');
    let cellId = cell.dataset.id;
    const [x, y] = Array.from(cellId);
    let index: string | number;
    switch (event.key) {
      case KEY_CODES.ArrowLeft:
        index = ALPHABET.indexOf(x) - 1;
        if (index >= 0) {
          cellId = ALPHABET[index] + y;
        }
        break;
      case KEY_CODES.ArrowRight:
        index = ALPHABET.indexOf(x) + 1;
        if (index < ALPHABET.length) {
          cellId = ALPHABET[index] + y;
        }
        break;
      case KEY_CODES.ArrowUp:
        index = parseInt(y, 10) - 1;
        if (index > 0) {
          cellId = x + index;
        }
        break;
      case KEY_CODES.ArrowDown:
        index = parseInt(y, 10) + 1;
        if (index <= NUMBERS.length) {
          cellId = x + index;
        }
        break;
    }
    return getCellElement(cellId);
  })
);

const selected$ = merge(
  cellClick$,
  move$,
  from([null, getCellElement('A1')]),
).pipe(
  share(),
);

selected$.pipe(pairwise())
  .subscribe(([previousCell, currentCell]: Array<HTMLElement | null>) => {
    if (previousCell instanceof HTMLElement) {
      const [x, y] = Array.from(previousCell.dataset.id);
      gridElement
        .querySelectorAll(`.th-x[data-x="${x}"], .th-y[data-y="${y}"]`)
        .forEach((th: HTMLElement) => removeClass(th, 'focus'));
      removeClass(previousCell, 'focus');
    }
    if (currentCell instanceof HTMLElement) {
      currentCell.classList.add('focus');
      const cellId = currentCell.dataset.id;
      const [x, y] = Array.from(cellId);
      gridElement
        .querySelectorAll(`.th-x[data-x="${x}"], .th-y[data-y="${y}"]`)
        .forEach((th: HTMLElement) => addClass(th, 'focus'));
      addClass(currentCell, 'focus');

      cellAddressElement.dataset.address = cellId;
      const cell = getCell(cellId);
      inputElement.value = cell.input$.value;
    }
  });

// emit cell input
mode$
  .pipe(
    switchMap(mode =>
      mode === MODE.INSERT ? fromEvent(inputElement, 'input') : of(null)
    ),
    filter(event => event),
    withLatestFrom(selected$),
    map(([event, cell]) => ({
      value: event.target.value,
      cell: getCell(cell.dataset.id),
    }))
  )
  .subscribe(({ value, cell }: { value: string; cell: Cell }) => {
    cell.input$.next(value);
  });

// Listen to error messages
selected$
  .pipe(
    map<HTMLElement, Cell>(cell => getCell(cell.dataset.id)),
    switchMap((cell: Cell) => cell.output$)
  )
  .subscribe(output => {
    errorMessageElement.innerText =
      output instanceof Error ? `#ERROR: ${output.message}` : '';
  });
