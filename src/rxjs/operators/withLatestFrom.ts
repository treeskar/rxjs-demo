import { Observable} from '../observable';
import { ObservableInputType, OperatorFunctionType } from '../types';
import { Subscriber } from '../subscriber';

export function withLatestFrom<T>(
  from: ObservableInputType<T>
): OperatorFunctionType<T, [unknown, T]> {
  return (source: ObservableInputType<unknown>) =>
    new Observable((subscriber: Subscriber<[unknown, T]>) =>
      withLatestFromOperator<T>(from, source, subscriber)
    );
}

function withLatestFromOperator<T>(
  from: ObservableInputType<T>,
  source: ObservableInputType<unknown>,
  subscriber: Subscriber<[unknown, T]>
): Subscriber<[unknown, T]> {
  let fromValue: any;
  const fromSubscription = from.subscribe(value => (fromValue = value));
  subscriber.add(fromSubscription);
  const subscription = source.subscribe(
    value => subscriber.next([value, fromValue]),
    error => subscriber.error(error),
    () => subscriber.complete()
  );
  subscriber.add(subscription);
  return subscriber;
}
