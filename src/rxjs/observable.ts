import { Subscriber } from './subscriber';
import { Subscription } from './subscription';
import { completeType, errorType, nextOrObserverType, OperatorFunctionType } from './types';

export class Observable<T> {
  constructor(subscribe?: (subscriber: Subscriber<T>) => Subscription) {
    if (typeof subscribe === 'function') {
      this._subscribe = subscribe;
    }
  }

  public subscribe(
    next: nextOrObserverType<T>,
    error?: errorType,
    complete?: completeType
  ): Subscription {
    const subscriber: Subscriber<T> = new Subscriber(next, error, complete);
    return this._subscribe(subscriber);
  }

  public pipe(...operators: OperatorFunctionType<any, any>[]): Observable<any> {
    return operators.reduce((acc, operator) => operator(acc), this);
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    return subscriber;
  }
}