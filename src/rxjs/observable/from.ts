import { Observable } from '../observable';
import { Subscriber } from '../subscriber';
import { Subscription } from "../subscription";

export function from<T>(iterable: T[]) {
  return new Observable<T>((subscriber: Subscriber<T>): Subscription => {
    for (const item of iterable) {
      subscriber.next(item);
    }
    subscriber.complete();
    return subscriber;
  });
}
