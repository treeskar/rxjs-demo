import { completeType, errorType, nextType } from './types';
import { Observable } from './observable';
import { Subscription } from './subscription';
import { Subscriber } from './subscriber';

describe('Observables', () => {
  let nextFn: nextType<string>;
  let completeFn: completeType;
  let errorFn: errorType;

  beforeEach(() => {
    // create observer mock methods before each test
    nextFn = jest.fn().mockName('next handler');
    completeFn = jest.fn().mockName('complete handler');
    errorFn = jest.fn().mockName('error handler');
  });

  test('Observable', () => {
    const arg = 'A';
    // create new Observable
    const observable = new Observable(
      (subscriber: Subscriber<string>): Subscription => {
        // as producer emit "a" and complete subscriber
        subscriber.next(arg);
        subscriber.complete();
        return subscriber;
      }
    );
    // subscriber to observable
    observable.subscribe(nextFn, errorFn, completeFn);
    // validate, that next mock function was called with "a" as argument
    expect(nextFn).toBeCalledWith(arg);
    // validate, that complete mock function was called
    expect(completeFn).toBeCalled();
    // validate, that error mock function was not called
    expect(errorFn).not.toBeCalled();
  });
});
