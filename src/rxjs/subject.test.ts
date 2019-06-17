import { Subject } from './subject';
import { completeType, errorType, nextType } from './types';

const error: Error = new Error('Test Error');

describe('Subject', () => {
  let subject: Subject<string>;
  let nextFn1: nextType<string>;
  let nextFn2: nextType<string>;
  let errorFn1: errorType;
  let errorFn2: errorType;
  let completeFn1: completeType;
  let completeFn2: completeType;

  beforeEach(() => {
    // create subject before each test
    subject = new Subject();
    // create two observer mock function
    nextFn1 = jest.fn().mockName('next handler 1');
    nextFn2 = jest.fn().mockName('next handler 2');
    errorFn1 = jest.fn().mockName('error handler 1');
    errorFn2 = jest.fn().mockName('error handler 2');
    completeFn1 = jest.fn().mockName('complete handler 1');
    completeFn2 = jest.fn().mockName('complete handler 2');
  });

  test('next', () => {
    const value1 = 'a';
    const value2 = 'b';
    // subscribe to subject with first next mock function and keep subscription
    const subscription1 = subject.subscribe(nextFn1);
    // subscribe to subject with second next mock function
    subject.subscribe(nextFn2);
    // emit first value "a"
    subject.next(value1);
    // unsubscribe first next mock function
    subscription1.unsubscribe();
    // emit second value "b"
    subject.next(value2);
    // validate, that first next mock function last time was called with "a" argument
    expect(nextFn1).lastCalledWith(value1);
    // validate, that second next mock function last time was called with "b" argument
    expect(nextFn2).lastCalledWith(value2);
  });

  test('error', () => {
    // subscribe to subject with first observer mock functions
    subject.subscribe(nextFn1, errorFn1, completeFn1);
    // emit error on subject
    subject.error(error);
    // emit "a" value
    subject.next('a');
    // validate, that error mock function was called with error as argument
    expect(errorFn1).toBeCalledWith(error);
    // validate, that next mock function was not called
    expect(nextFn1).not.toBeCalled();
    // validate, that complete mock function was not called
    expect(completeFn1).not.toBeCalled();

    // subscribe to subject with second observer mock functions
    subject.subscribe(nextFn2, errorFn2, completeFn2);
    // validate, that error mock function was called with error as argument
    expect(errorFn2).toBeCalledWith(error);
    // validate, that next mock function was not called
    expect(nextFn2).not.toBeCalled();
    // validate, that complete mock function was not called
    expect(completeFn2).not.toBeCalled();
  });

  test('complete', () => {
    // subscribe to subject with first observer mock functions
    subject.subscribe(nextFn1, errorFn1, completeFn1);
    // complete subject
    subject.complete();
    // emit "a" value
    subject.next('a');
    // subscribe to subject with second observer mock functions
    subject.subscribe(nextFn2, errorFn2, completeFn2);
    // validate, that first complete mock function was called
    expect(completeFn1).toBeCalled();
    // validate, that first next mock function was not called
    expect(nextFn1).not.toBeCalled();
    // validate, that first error mock function was not called
    expect(errorFn1).not.toBeCalled();

    // validate, that second complete mock function was called
    expect(completeFn2).toBeCalled();
    // validate, that second next mock function was not called
    expect(nextFn2).not.toBeCalled();
    // validate, that second error mock function was not called
    expect(errorFn2).not.toBeCalled();
  });

  test('unsubscribe', () => {
    const value = 'a';
    // subscribe to subject with first observer mock functions and keep subscription
    const subscription = subject.subscribe(nextFn1, errorFn1, completeFn1);
    // call unsubscribe method on subject
    subject.unsubscribe();
    // call unsubscribe method on subscription
    subscription.unsubscribe();
    // subscribe to subject with second observer mock functions
    subject.subscribe(nextFn2, errorFn2, completeFn2);
    // emit "a" value
    subject.next(value);

    // validate, that first complete function was not called
    expect(completeFn1).not.toBeCalled();
    // validate, that first next function was not called
    expect(nextFn1).not.toBeCalled();
    // validate, that first error function was not called
    expect(errorFn1).not.toBeCalled();

    // validate, that second complete function was not called
    expect(completeFn2).toBeCalled();
    // validate, that second next function was not called
    expect(nextFn2).not.toBeCalled();
    // validate, that second error function was not called
    expect(errorFn2).not.toBeCalled();
  });
});
