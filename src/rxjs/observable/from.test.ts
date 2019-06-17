import { completeType, errorType, nextType } from "../types";
import { from } from "./from";

describe("Observables", () => {

  let nextFn: nextType<string>;
  let completeFn: completeType;
  let errorFn: errorType;

  beforeEach(() => {
    // create observer mock methods before each test
    nextFn = jest.fn().mockName("next handler");
    completeFn = jest.fn().mockName("complete handler");
    errorFn = jest.fn().mockName("error handler");
  });

  test("from", () => {
    const args = ["A", "B", "C"];
    // subscribe to from observable
    from<string>(args).subscribe(nextFn, errorFn, completeFn);
    args.forEach((arg, i) => {
      // validate, that next mock function was called in right order with right arguments
      expect(nextFn).nthCalledWith(i + 1, arg);
    });
    // validate, that complete mock function was called
    expect(completeFn).toBeCalled();
    // validate, that error mock function was not called
    expect(errorFn).not.toBeCalled();
  });

});
