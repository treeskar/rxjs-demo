import { Observable } from '../observable';
import { Subscriber } from '../subscriber';
import { Subscription } from '../subscription';

export function merge<T>(
  ...observables: Observable<unknown>[]
): Observable<T> {
  return new Observable(
    (subscriber: Subscriber<unknown>): Subscription => {
      let notCompleted = observables.length;
      const completeHandler = () => {
        if (--notCompleted === 0) {
          subscriber.complete();
        }
      };
      observables.forEach(observable => {
        const subscription = observable.subscribe(
          value => subscriber.next(value),
          error => subscriber.error(error),
          completeHandler
        );
        subscriber.add(subscription);
      });
      return subscriber;
    }
  );
}
