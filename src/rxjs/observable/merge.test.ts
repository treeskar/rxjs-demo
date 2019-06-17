import { completeType, errorType, nextType } from '../types';
import { from } from './from';
import { merge } from './merge';

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

  test('merge', () => {
    const letters: string[] = ['a', 'b', 'c'];
    const numbers: number[] = [1, 2, 3];
    merge(from(letters), from(numbers)).subscribe(nextFn, errorFn, completeFn);
    [...letters, ...numbers].forEach((arg, i) => {
      expect(nextFn).nthCalledWith(i + 1, arg);
    });
    expect(completeFn).toBeCalled();
    expect(errorFn).not.toBeCalled();
  });
});
