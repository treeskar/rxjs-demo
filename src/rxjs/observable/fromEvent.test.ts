import { completeType, errorType, nextType } from '../types';
import { fromEvent } from './fromEvent';

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

  test('fromEvent', () => {
    // we use JSDOM, to emulate DOM
    // create button element
    const button = document.createElement('button');
    // subscriber "button's click" observable
    const subscription = fromEvent(button, 'click').subscribe(
      nextFn,
      errorFn,
      completeFn
    );
    // emit click event
    button.click();
    // validate, that next mock function was called
    expect(nextFn).toBeCalled();
    // validate, that complete mock function was not called
    expect(completeFn).not.toBeCalled();
    // validate, that error mock function was not called
    expect(errorFn).not.toBeCalled();
    // unsubscribe from observable
    subscription.unsubscribe();
    // emit click event
    button.click();
    // validate, that next mock function was called one time only
    expect(nextFn).toBeCalledTimes(1);
  });
});
