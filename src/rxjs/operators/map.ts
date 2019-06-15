import { Observable} from '../observable';
import { Subscriber } from '../subscriber';
import { OperatorFunctionType } from '../types';

type MapProjectFunctionType<T, R> = (value: T, index: number) => R;

export function map<T, R>(
  project: MapProjectFunctionType<T, R>
): OperatorFunctionType<T, R> {
  return (source: Observable<T>) =>
    new Observable((subscriber: Subscriber<R>) =>
      mapOperator<T, R>(project, source, subscriber)
    );
}

function mapOperator<T, R>(
  project: MapProjectFunctionType<T, R>,
  source: Observable<T>,
  subscriber: Subscriber<R>
) {
  let count = 0;
  const nextHandler = (value: T) => {
    let result: R;
    try {
      result = project(value, count++);
    } catch (error) {
      subscriber.error(error);
      return;
    }
    subscriber.next(result);
  };
  const subscription = source.subscribe(
    nextHandler,
    error => subscriber.error(error),
    () => subscriber.complete()
  );
  subscriber.add(subscription);
  return subscriber;
}
