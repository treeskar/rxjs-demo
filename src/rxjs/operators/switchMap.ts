import { Observable} from '../observable';
import { Subscriber } from '../subscriber';
import { Subscription } from '../subscription';
import { OperatorFunctionType } from '../types';

type SwitchMapProjectFunctionType<T, R> = (value: T) => Observable<R>;

export function switchMap<T, R>(
  project: SwitchMapProjectFunctionType<T, R>
): OperatorFunctionType<T, R> {
  return (source: Observable<T>) =>
    new Observable((subscriber: Subscriber<R>) =>
      switchMapOperator<T, R>(project, source, subscriber)
    );
}

function switchMapOperator<T, R>(
  project: SwitchMapProjectFunctionType<T, R>,
  source: Observable<T>,
  subscriber: Subscriber<R>
): Subscriber<R> {
  let nextSubscription: Subscription;
  const nextHandler = (value: T) => {
    if (nextSubscription) {
      subscriber.remove(nextSubscription);
      nextSubscription.unsubscribe();
    }
    let next: Observable<R>;
    try {
      next = project(value);
      nextSubscription = next.subscribe(
        nextValue => subscriber.next(nextValue),
        error => subscriber.error(error)
      );
      subscriber.add(nextSubscription);
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
