import { completeType, errorType, nextType } from '../types';
import { from } from '../observable/from';
import { of } from "../observable/of";
import { switchMap } from "./switchMap";

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

  describe('switchMap', () => {
    const args: number[] = [1, 2, 3, 4];

    test('next', () => {
      from<number>(args)
        .pipe(switchMap(value => of(value + 1)))
        .subscribe(nextFn);

      args.forEach((value, index) => {
        expect(nextFn).nthCalledWith(index + 1, value + 1);
      });
    });

    test('error', () => {
      from(args)
        .pipe(switchMap(value => { throw error; }))
        .subscribe(nextFn, errorFn);
      expect(errorFn).toBeCalledWith(error);
    });
  });
});
