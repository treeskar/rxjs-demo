import './sass/index.scss';
import {
  BehaviorSubject,
  fromEvent,
  filter,
  map,
  pairwise,
  switchMap,
  startWith,
  of,
  merge,
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

const selected$: BehaviorSubject<null | HTMLElement> = new BehaviorSubject(
  getCellElement('A1')
);
enum MODE { VIEW, INSERT }
const mode$: BehaviorSubject<MODE> = new BehaviorSubject(MODE.VIEW);

const getClosestCell = map(({ target }: Event) =>
  (target as HTMLElement).closest('.cell')
);

// Listen to cell click
fromEvent(cellsElement, 'click')
  .pipe(getClosestCell)
  .subscribe((newFocus: HTMLElement | null) => {
    selected$.next(newFocus);
  });

// Display focused cell
selected$
  .pipe(
    startWith(null),
    pairwise()
  )
  .subscribe(([previousCell, currentCell]: Array<Element | null>) => {
    if (previousCell instanceof HTMLElement) {
      const [x, y] = Array.from(previousCell.dataset.id);
      gridElement
        .querySelectorAll(`.th-x[data-x="${x}"], .th-y[data-y="${y}"]`)
        .forEach((th: HTMLElement) => removeClass(th, 'focus'));
      removeClass(previousCell, 'focus');
    }
    if (currentCell instanceof HTMLElement) {
      currentCell.classList.add('focus');
      const [x, y] = Array.from(currentCell.dataset.id);
      gridElement
        .querySelectorAll(`.th-x[data-x="${x}"], .th-y[data-y="${y}"]`)
        .forEach((th: HTMLElement) => addClass(th, 'focus'));
      addClass(currentCell, 'focus');
    }
  });

// Add keyboard navigation
enum KEY_CODES {
  ArrowDown = 'ArrowDown',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  ArrowLeft = 'ArrowLeft',
  Enter = 'Enter',
}

fromEvent<KeyboardEvent>(document.body, 'keydown')
  .pipe(filter(event => (event.key in KEY_CODES && mode$.value === MODE.VIEW)))
  .subscribe((event: KeyboardEvent) => {
    event.stopPropagation();
    const [x, y] = Array.from(selected$.value.dataset.id);
    let index: string | number;
    switch (event.key) {
      case KEY_CODES.ArrowLeft:
        index = ALPHABET.indexOf(x) - 1;
        if (index >= 0) {
          selected$.next(getCellElement(ALPHABET[index] + y));
        }
        break;
      case KEY_CODES.ArrowRight:
        index = ALPHABET.indexOf(x) + 1;
        if (index < ALPHABET.length) {
          selected$.next(getCellElement(ALPHABET[index] + y));
        }
        break;
      case KEY_CODES.ArrowUp:
        index = parseInt(y, 10) - 1;
        if (index > 0) {
          selected$.next(getCellElement(x + index));
        }
        break;
      case KEY_CODES.ArrowDown:
        index = parseInt(y, 10) + 1;
        if (index <= NUMBERS.length) {
          selected$.next(getCellElement(x + index));
        }
        break;
      // TODO: 12 initiate editing on cell ENTER
      case KEY_CODES.Enter:
        mode$.next(MODE.INSERT);
        break;
    }
  });

// emit start cell edit from input
fromEvent(inputElement, 'focus')
  .pipe(filter(() => mode$.value === MODE.VIEW))
  .subscribe(() => {
    mode$.next(MODE.INSERT);
  });

// emit end cell edit from input
const inputBlur$ = fromEvent(inputElement, 'blur').pipe(
  filter(() => mode$.value === MODE.INSERT)
);

const inputEnter$ = fromEvent(inputElement, 'keydown').pipe(
  filter((event: KeyboardEvent) => event.key === 'Enter')
);

merge(inputBlur$, inputEnter$).subscribe(
  (event: KeyboardEvent | InputEvent) => {
    event.stopPropagation();
    mode$.next(MODE.VIEW);
  }
);

// Listen to start editing
mode$.subscribe(mode => {
  if (mode === MODE.INSERT) {
    inputElement.focus();
  } else {
    cellsElement.focus();
  }
});

// emit cell input
fromEvent(inputElement, 'input')
  .pipe(
    filter(() => mode$.value === MODE.INSERT),
    map((event) => ({
      value: event.target.value,
      cell: getCell(selected$.value.dataset.id),
    }))
  )
  .subscribe(({ value, cell }: { value: string; cell: Cell }) => {
    cell.input$.next(value);
  });

// update input cell address when cell focus changed
selected$
  .pipe(
    filter(element => element instanceof HTMLElement),
    map((element: HTMLElement) => element.dataset.id)
  )
  .subscribe((cellId: string) => {
    cellAddressElement.dataset.address = cellId;
    const cell = getCell(cellId);
    inputElement.value = cell.input$.value;
  });

// Listen to error messages
selected$
  .pipe(
    filter(cell => cell instanceof HTMLElement),
    map<HTMLElement, Cell>(cell => getCell(cell.dataset.id)),
    switchMap((cell: Cell) => cell.output$)
  )
  .subscribe(output => {
    errorMessageElement.innerText =
      output instanceof Error ? `#ERROR: ${output.message}` : '';
  });

// Highlight cell's dependency
mode$
  .pipe(
    switchMap(mode => {
      if (mode === MODE.VIEW) {
        return of([]);
      }
      const cell = getCell(selected$.value.dataset.id);
      return cell.output$.pipe(map(() => cell.dependency));
    }),
    map<Cell[], HTMLElement[]>(cells => cells.map(cell => cell.element)),
    pairwise()
  )
  .subscribe(
    ([prevDependency, newDependency]: [HTMLElement[], HTMLElement[]]) => {
      prevDependency
        .filter(cell => !newDependency.includes(cell))
        .forEach(cell => removeClass(cell, 'include'));

      newDependency
        .filter(cell => !prevDependency.includes(cell))
        .forEach((cell: HTMLElement) => addClass(cell, 'include'));
    }
  );
