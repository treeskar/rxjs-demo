import { Observable } from '../observable';
import { Subscriber } from '../subscriber';
import { Subscription } from '../subscription';

export function from<T>(iterable: T[]): Observable<T> {
  return new Observable(
    (subscriber: Subscriber<T>): Subscription => {
      for (let value of iterable) {
        subscriber.next(value);
      }
      subscriber.complete();
      return subscriber;
    }
  );
}
