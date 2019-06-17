import { completeType, errorType, nextType } from '../types';
import { of } from './of';

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

  test('from', () => {
    const arg: string = 'A';
    // subscribe to from observable
    of<string>(arg).subscribe(nextFn, errorFn, completeFn);
    expect(nextFn).toBeCalledWith(arg);
    // validate, that complete mock function was called
    expect(completeFn).toBeCalled();
    // validate, that error mock function was not called
    expect(errorFn).not.toBeCalled();
  });
});
