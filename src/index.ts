// TODO: 6 add styles
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
  of, merge,
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

// TODO: 5 append grid element to body
document.body.appendChild(gridElement);

const addClass = (element: Element | null, className: string) => element && element.classList.add(className);
const removeClass = (element: Element | null, className: string) => element && element.classList.remove(className);
const toggleClass = (element: Element | null, className: string) => element && element.classList.toggle(className);

/*
  TODO: 7 mouse move interaction (3 steps)
  - TODO: 7.1 create Subscription
  - TODO: 7.2 create Observer Interface (types file)
  - TODO: 7.4 create Subscriber
  - TODO: 7.5 create Observable
  - TODO: 7.6 create of observable function
  - TODO: 7.6 create fromEvent observable function
  - from move 2 step
  - TODO: 7.7 create map operator
  - TODO: 7.8 create startWith operator
  - from move 3 step
  - TODO: 7.9 create pairwise operator
 */
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

/*
  TODO: 9 create focus$ BehaviorSubject
  - TODO: 9.1 create Subject
  - TODO: 9.1 create SubjectSubscription
  - TODO: 9.1 create BehaviorSubject
*/
const focus$: BehaviorSubject<null | HTMLElement> = new BehaviorSubject(getCellElement('A1'));
// TODO: 13 create edit$ BehaviorSubject
const edit$: BehaviorSubject<null | HTMLElement> = new BehaviorSubject(null);

const getClosestCell = map(({ target }: Event) =>
  (target as HTMLElement).closest('.cell')
);

// TODO: 8 mouse click on cell interaction
// Listen to cell click
fromEvent(cellsElement, 'click')
  .pipe(getClosestCell)
  .subscribe((newFocus: HTMLElement | null) => {
    focus$.next(newFocus);
  });

// TODO: 10 display focus cell, row and column (2 steps)
// Display focused cell
focus$
  .pipe(
    startWith(null),
    pairwise(),
  )
  .subscribe(([previousCell, currentCell]: Array<Element | null>) => {
    if (previousCell instanceof HTMLElement) {
      const [x, y] = Array.from(previousCell.dataset.id);
      gridElement
        .querySelectorAll(`.th-x[data-x="${x}"], .th-y[data-y="${y}"]`)
        .forEach((th: HTMLElement) =>  removeClass(th, 'focus'));
      removeClass(previousCell, 'focus');
    }
    if (currentCell instanceof HTMLElement) {
      currentCell.classList.add('focus');
      const [x, y] = Array.from(currentCell.dataset.id);
      gridElement
        .querySelectorAll(`.th-x[data-x="${x}"], .th-y[data-y="${y}"]`)
        .forEach((th: HTMLElement) =>  addClass(th, 'focus'));
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

/*
  TODO: 11 create keyboard navigation (3 steps)
  - TODO: 11.1 create filter operator
  - TODO: 11.2 create withLatestFrom operator
*/
fromEvent<KeyboardEvent>(document.body, 'keydown')
  .pipe(
    filter(event => event.key in KEY_CODES && edit$.value === null),
    withLatestFrom(focus$)
  )
  .subscribe(([event, cell]: [KeyboardEvent, HTMLElement]) => {
    event.stopPropagation();
    const [x, y] = Array.from(cell.dataset.id);
    let index: string | number;
    switch (event.key) {
      case KEY_CODES.ArrowLeft:
        index = ALPHABET.indexOf(x) - 1;
        if (index >= 0) {
          focus$.next(getCellElement(ALPHABET[index] + y));
        }
        break;
      case KEY_CODES.ArrowRight:
        index = ALPHABET.indexOf(x) + 1;
        if (index < ALPHABET.length) {
          focus$.next(getCellElement(ALPHABET[index] + y));
        }
        break;
      case KEY_CODES.ArrowUp:
        index = parseInt(y, 10) - 1;
        if (index > 0) {
          focus$.next(getCellElement(x + index));
        }
        break;
      case KEY_CODES.ArrowDown:
        index = parseInt(y, 10) + 1;
        if (index <= NUMBERS.length) {
          focus$.next(getCellElement(x + index));
        }
        break;
      // TODO: 12 initiate editing on cell ENTER
      case KEY_CODES.Enter:
        edit$.next(cell);
        break;
    }
  });

// TODO: 14 listen to input focus event
// emit start cell edit from input
fromEvent(inputElement, 'focus')
  .pipe(filter(() => edit$.value === null && focus$.value !== null))
  .subscribe(() => {
    edit$.next(focus$.value);
  });

// TODO: 15 listen to input blur and keydown "Enter" events
// emit end cell edit from input
const inputBlur$ = fromEvent(inputElement, 'blur')
  .pipe(filter(() => edit$.value !== null && focus$.value !== null));

const inputEnter$ = fromEvent(inputElement, 'keydown')
  .pipe(filter((event: KeyboardEvent) => event.key === 'Enter'));

/*
  TODO: 16 merge both streams and disable edit mode
  - TODO: 16.1 create merge observable function
*/
merge(inputBlur$, inputEnter$)
  .subscribe((event: KeyboardEvent | InputEvent) => {
    event.stopPropagation();
    edit$.next(null);
  });

// TODO: 17 toggle focus
// Listen to start editing
edit$.subscribe(cell => {
  if (cell instanceof HTMLElement) {
    inputElement.focus();
  } else {
    cellsElement.focus();
  }
});

/*
  TODO: 18 edit interaction (3 steps)
  - TODO: 18.1 create switchMap operator
  - TODO: 18.2 create getCell function and CELLS Map
  - TODO: 18.3 create Cell class (step 1)
  - TODO: 18.4 create cell ID parse and render
*/
// emit cell input
fromEvent(inputElement, 'input')
  .pipe(
    withLatestFrom(edit$),
    filter(([event, cell]) => cell instanceof HTMLElement),
    map(([event, cell]) => ({
      value: event.target.value,
      cell: getCell(cell.dataset.id),
    })),
  )
  .subscribe(({ value, cell }: { value: string; cell: Cell }) => {
    cell.input$.next(value);
  });

/*
  TODO: 19 update input value
  - TODO: 19.1 Cell add dependency validator
*/
// update input cell address when cell focus changed
focus$
  .pipe(
    filter(element => element instanceof HTMLElement),
    map((element: HTMLElement) => element.dataset.id)
  )
  .subscribe((cellId: string) => {
    cellAddressElement.dataset.address = cellId;
    const cell = getCell(cellId);
    inputElement.value = cell.input$.value;
  });

/*
  TODO: 20 update error messages
  - TODO: 20.1 Create functions (3 steps)
  - TODO: 20.2 add Cell exec and function arguments parse
*/
// Listen to error messages
focus$
  .pipe(
    filter(cell => cell instanceof HTMLElement),
    map<HTMLElement, Cell>(cell => getCell(cell.dataset.id)),
    switchMap((cell: Cell) => cell.output$)
  )
  .subscribe(output => {
    errorMessageElement.innerText =
      output instanceof Error ? `#ERROR: ${output.message}` : '';
  });


// TODO: 21 BONUS!!! add highlight cells behavior
edit$
  .pipe(
    switchMap(cellElement => {
      if (!(cellElement instanceof HTMLElement)) {
        return of([]);
      }
      const cell = getCell(cellElement.dataset.id);
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
