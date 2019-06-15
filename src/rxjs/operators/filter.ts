import { Observable} from '../observable';
import { Subscriber } from '../subscriber';
import { OperatorFunctionType } from '../types';

type FilterProjectFunctionType<T> = (value: T, index: number) => boolean;

export function filter<T>(
  project: FilterProjectFunctionType<T>
): OperatorFunctionType<T, T> {
  return (source: Observable<T>) =>
    new Observable(subscriber =>
      filterOperator<T>(project, source, subscriber)
    );
}

function filterOperator<T>(
  project: FilterProjectFunctionType<T>,
  source: Observable<T>,
  subscriber: Subscriber<T>
): Subscriber<T> {
  let count = 0;
  const nextHandler = (value: T) => {
    try {
      if (project(value, count++)) {
        subscriber.next(value);
      }
    } catch (error) {
      subscriber.error(error);
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
