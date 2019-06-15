import { Observable } from '../observable';

export function combineLatest(
  observables: Observable<unknown>[]
): Observable<unknown[]> {
  return new Observable(subscriber => {
    const response: unknown[] = [];
    const streamsSet: Set<number> = new Set();
    let notCompleted = observables.length;
    observables.forEach((observable, i: number) => {
      const nextHandler = (value: unknown) => {
        response[i] = value;
        if (!streamsSet.has(i)) {
          streamsSet.add(i);
        }
        if (streamsSet.size === observables.length) {
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
