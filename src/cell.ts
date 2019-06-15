import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  Subscription,
  map,
  switchMap,
} from './rxjs';
import { FUNCTIONS, FunctionType } from './functions';
import { cellsElement } from './bootstrap';

export const CELL_ID_PATTERN = /^[A-F][1-6]$/;
export const FUNCTION_PATTERN = /^(?<functionName>[A-Z]+)\((?<args>[A-Z0-9, ()]*)\)?$/;
export const ARGUMENT_MATCHER = /([A-Z]+\([A-Z0-9, ()]*?\)+)|([A-Z0-9]+)/g;

export type CellOutputType = string | number | Error;
const throwError = (error: string): Observable<Error> => of(new Error(error));

export function getCellElement(id: string): HTMLElement | null {
  return cellsElement.querySelector(`[data-id=${id}]`);
}

const CELLS: Map<string, Cell> = new Map();

export function getCell(id: string): Cell {
  if (!CELLS.has(id)) {
    CELLS.set(id, new Cell(id));
  }
  return CELLS.get(id);
}

export class Cell {
  input$: BehaviorSubject<string> = new BehaviorSubject('');
  output$: BehaviorSubject<CellOutputType> = new BehaviorSubject('');
  dependency: Cell[] = [];
  private subscription: Subscription;

  get element(): HTMLElement {
    return getCellElement(this.id);
  }

  constructor(public id: string) {
    this.subscription = this.input$
      .pipe(switchMap((value: string) => this.parse(value)))
      .subscribe((output: CellOutputType) => this.output$.next(output));

    this.subscription.add(
      this.output$.subscribe(output => this.render(output))
    );
  }

  private render(output: CellOutputType): void {
    const element = this.element;
    if (!(element instanceof HTMLElement)) {
      return;
    }
    if (output instanceof Error) {
      this.element.dataset.error = output.message;
      this.element.innerText = '#ERROR';
      return;
    }
    if (this.element.dataset.error) {
      delete this.element.dataset.error;
    }
    this.element.innerText = output.toString();
  }

  private parse(input: string): Observable<CellOutputType> {
    let value = input
      .trim()
      .toUpperCase()
      .replace(/ +/, '');
    this.dependency = [];
    if (!/^=.+/.test(value)) {
      return of(input);
    }
    value = value.substr(1);
    return this.parseArgument(value);
  }

  private parseArgument(argument: string): Observable<CellOutputType> {
    if (CELL_ID_PATTERN.test(argument)) {
      const dependency = getCell(argument);
      if (this.isDependencyValid(dependency)) {
        this.dependency.push(dependency);
        return dependency.output$;
      } else {
        return throwError('Circular dependency');
      }
    }
    const result = argument.match(FUNCTION_PATTERN);
    if (result === null) {
      return of(argument);
    }
    const {
      groups: { functionName, args },
    } = result;
    if (FUNCTIONS.has(functionName)) {
      return this.exec(
        FUNCTIONS.get(functionName),
        args.match(ARGUMENT_MATCHER) || []
      );
    }
    return throwError('Unknown function');
  }

  private isDependencyValid(cell: Cell): boolean {
    if (!(cell instanceof Cell)) {
      return true;
    }
    if (cell === this) {
      return false;
    }
    return !cell.dependency.some(cell => !this.isDependencyValid(cell));
  }

  private exec(
    operator: FunctionType,
    args: string[]
  ): Observable<CellOutputType> {
    let dependency$ = of([]);
    if (args.length) {
      const arguments$: Observable<CellOutputType>[] = args.map(argument =>
        this.parseArgument(argument)
      );
      dependency$ = combineLatest(arguments$);
    }
    return dependency$.pipe(
      map((args: string[]) => {
        try {
          return operator(...args);
        } catch (error) {
          return new Error(error);
        }
      })
    );
  }

  public destroy() {
    this.subscription.unsubscribe();
  }
}
