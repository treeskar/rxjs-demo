import { completeType, errorType, nextType } from '../types';
import { from } from '../observable/from';
import { filter } from './filter';

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

  describe('filter', () => {
    const args: number[] = [1, 2, 3, 4];

    test('next', () => {
      const filterFn = (value: number, index: number): boolean => value % 2 === 0 || index === 0;
      from<number>(args)
        .pipe(filter(filterFn))
        .subscribe(nextFn);

      args.filter(filterFn).forEach((value, index) => {
        expect(nextFn).nthCalledWith(index + 1, value);
      });
    });

    test('error', () => {
      const filterFn = () => {
        throw error;
      };
      from(args)
        .pipe(filter(filterFn))
        .subscribe(nextFn, errorFn);
      expect(errorFn).toBeCalledWith(error);
    });
  });
});
