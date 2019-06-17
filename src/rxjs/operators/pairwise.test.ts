import { completeType, errorType, nextType } from '../types';
import { from } from '../observable/from';
import { pairwise } from './pairwise';

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

  describe('pairwise', () => {
    const args: number[] = [1, 2, 3, 4];

    test('next', () => {
      from<number>(args)
        .pipe(pairwise())
        .subscribe(nextFn);

      args.forEach((value, index) => {
        const nextValue = args[index + 1];
        if (nextValue) {
          expect(nextFn).nthCalledWith(index + 1, [value, args[index + 1]]);
        }
      });
    });
  });
});
