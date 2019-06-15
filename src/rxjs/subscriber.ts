import { Subscription } from './subscription';
import {
  completeType,
  errorType,
  IObserver,
  nextOrObserverType,
} from './types';

export class Subscriber<T> extends Subscription implements IObserver<T> {
  _observer: IObserver<T>;

  constructor(
    next: nextOrObserverType<T>,
    error: errorType = () => {},
    complete: completeType = () => {}
  ) {
    super();
    if (typeof next === 'function') {
      this._observer = { next, error, complete };
    } else {
      this._observer = next;
    }
  }

  public next(value?: T): void {
    if (!this.closed) {
      this._observer.next(value);
    }
  }

  public error(error?: any): void {
    if (!this.closed) {
      this._observer.error(error);
      this.unsubscribe();
    }
  }

  public complete() {
    if (!this.closed) {
      this._observer.complete();
      this.unsubscribe();
    }
  }
}
