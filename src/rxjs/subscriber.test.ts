import { completeType, errorType, nextType } from './types';
import { Subscription } from './subscription';
import { Subscriber } from './subscriber';

const error: Error = new Error('Test Error');

describe('Subscriber', () => {
  let nextFn: nextType<string>;
  let completeFn: completeType;
  let errorFn: errorType;
  let unsubscribeFn: () => void;
  let subscription: Subscription;

  beforeEach(() => {
    // create observer mock methods before each test
    nextFn = jest.fn().mockName('next handler');
    completeFn = jest.fn().mockName('complete handler');
    errorFn = jest.fn().mockName('error handler');
    // create subscription with mock unsubscribe function before each test
    unsubscribeFn = jest.fn().mockName('unsubscribe handler');
    subscription = new Subscription(unsubscribeFn);
  });

  test('next/complete', () => {
    // create subscriber
    const subscriber = new Subscriber({
      complete: completeFn,
      error: errorFn,
      next: nextFn,
    });
    // add child subscription to subscriber
    subscriber.add(subscription);
    // call next method
    subscriber.next('a');
    // complete subscriber
    subscriber.complete();
    // call error method
    subscriber.error(error);
    // call next method second time
    subscriber.next('b');
    // validate, that next mock function last time was called with "a" as argument
    expect(nextFn).lastCalledWith('a');
    // validate, that complete mock function was called
    expect(completeFn).toBeCalled();
    // validate, that error mock function was not called
    expect(errorFn).not.toBeCalled();
    // validate, that child unsubscribe mock function was called
    expect(unsubscribeFn).toBeCalled();
  });

  test('error', () => {
    // create subscriber
    const subscriber = new Subscriber(nextFn, errorFn, completeFn);
    // add child subscription
    subscriber.add(subscription);
    // call error method on subscriber
    subscriber.error(error);
    // call next method
    subscriber.next('a');
    // call complete
    subscriber.complete();
    // validate, that next mock function was not called
    expect(nextFn).not.toBeCalled();
    // validate, that error mock function was called with "error" as argument
    expect(errorFn).toBeCalledWith(error);
    // validate, that complete mock function was not called
    expect(completeFn).not.toBeCalled();
    // validate, that child unsubscribe mock function was called
    expect(unsubscribeFn).toBeCalled();
  });
});
