import { Observable } from '../observable';

export function of<T>(value: T): Observable<T> {
  return new Observable(subscriber => {
    subscriber.next(value);
    subscriber.complete();
    return subscriber;
  });
}
