import { Observable} from '../observable';
import { Subscriber } from '../subscriber';
import { OperatorFunctionType } from '../types';

export function startWith<T>(startValue: T): OperatorFunctionType<T, T> {
  return (source: Observable<T>) =>
    new Observable((subscriber: Subscriber<T>) =>
      startWithOperator(startValue, source, subscriber)
    );
}

function startWithOperator<T>(
  startValue: T,
  source: Observable<T>,
  subscriber: Subscriber<T>
): Subscriber<T> {
  subscriber.next(startValue);
  const subscription = source.subscribe(
    value => subscriber.next(value),
    error => subscriber.error(error),
    () => subscriber.complete()
  );
  subscriber.add(subscription);
  return subscriber;
}
