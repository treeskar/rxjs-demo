import { Observable} from '../observable';
import { Subscriber } from '../subscriber';
import { OperatorFunctionType } from '../types';

export function pairwise<T>(): OperatorFunctionType<T, [T, T]> {
  return (source: Observable<T>) =>
    new Observable((subscriber: Subscriber<[T, T]>) =>
      pairwiseOperator(source, subscriber)
    );
}

function pairwiseOperator<T>(
  source: Observable<T>,
  subscriber: Subscriber<[T, T]>
): Subscriber<[T, T]> {
  let result: [T, T] | undefined;
  const nextHandler = (value: T) => {
    if (result) {
      result = [result[1], value];
      subscriber.next(result);
    } else {
      result = [value, value];
    }
  };
  const subscription = source.subscribe(
    nextHandler,
    error => subscriber.error(error),
    () => subscriber.complete()
  );
  subscriber.add(subscription);
  return subscriber;
}
