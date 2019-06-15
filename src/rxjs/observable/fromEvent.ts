import { Observable } from '../observable';
import { Subscription } from '../subscription';

export function fromEvent<T>(
  target: HTMLElement,
  eventName: string
): Observable<T | Event> {
  return new Observable(subscriber => {
    const nextHandler = (event: Event) => subscriber.next(event);
    target.addEventListener(eventName, nextHandler);
    const subscription = new Subscription(() =>
      target.removeEventListener(eventName, nextHandler)
    );
    subscriber.add(subscription);
    return subscriber;
  });
}
