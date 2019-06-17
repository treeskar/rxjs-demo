import { completeType, errorType, nextType } from '../types';
import { from } from '../observable/from';
import { map } from './map';

const error: Error = new Error('Test Error');

describe('Operators', () => {
  let nextFn: nextType<string>;
  let completeFn: completeType;
  let errorFn: errorType;

  beforeEach(() => {
    // create observer mock methods before each test
    nextFn = jest.fn().mockName('next handler');
    completeFn = jest.fn().mockName('complete handler');
    errorFn = jest.fn().mockName('error handler');
  });

  describe('map', () => {
    const letters = ['a', 'b', 'c'];

    test('next', () => {
      // create map function. (a, 0) => "0: a"
      const mapFn = (value: string, index: number): string =>
        `${index}: ${value}`;
      // subscribe to from observable with map operator
      from(letters)
        .pipe(map<string, string>(mapFn))
        .subscribe(nextFn);
      // pass letters through mapFn
      letters.map(mapFn).forEach((value, index) => {
        // validate, that next mock function was called in right order with right arguments
        expect(nextFn).nthCalledWith(index + 1, value);
      });
    });

    test('error', () => {
      // create map function, that returns an error
      const mapFn = () => {
        throw error;
      };
      // subscribe to from observable with map operator
      from(letters)
        .pipe(map(mapFn))
        .subscribe(nextFn, errorFn);
      // validate, that next mock function was not called
      expect(nextFn).not.toBeCalled();
      // validate, that error mock function was called with error as argument
      expect(errorFn).toBeCalledWith(error);
    });
  });
});
