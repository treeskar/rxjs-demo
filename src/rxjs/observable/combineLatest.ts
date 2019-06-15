import { Observable } from '../observable';

export function combineLatest(
  observables: Observable<unknown>[]
): Observable<unknown[]> {
  return new Observable(subscriber => {
    const response: unknown[] = [];
    const streamsMap: Map<number, boolean> = new Map();
    let notCompleted = observables.length;
    observables.forEach((observable, i: number) => {
      const nextHandler = (value: unknown) => {
        streamsMap.set(i, true);
        response[i] = value;
        if (streamsMap.size === observables.length) {
          subscriber.next(response);
        }
      };

      const completeHandler = () => {
        if (--notCompleted === 0) {
          subscriber.complete();
        }
      };

      const subscription = observable.subscribe(
        nextHandler,
        error => subscriber.error(error),
        completeHandler,
      );
      subscriber.add(subscription);
    });
    return subscriber;
  });
}
