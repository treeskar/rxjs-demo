import { completeType, errorType, nextType } from '../types';
import { from } from '../observable/from';
import { startWith } from "./startWith";

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

  describe('startWith', () => {
    const args: number[] = [1, 2, 3, 4];
    const startValue = 0;

    test('next', () => {
      from<number>(args)
        .pipe(startWith(startValue))
        .subscribe(nextFn);

      expect(nextFn).nthCalledWith(1, startValue);
    });
  });

});
