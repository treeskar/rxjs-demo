import { Observable } from './observable';
import { Subscriber } from './subscriber';
import { Subscription } from './subscription';
import { SubjectSubscription } from './subjectSubscription';

export class Subject<T> extends Observable<T> {
  subscribers: Subscriber<T>[] = [];
  isStopped: boolean = false;
  hasError: boolean = false;
  thrownError: unknown;

  constructor() {
    super();
  }

  public next(value?: T): void {
    if (!this.isStopped) {
      this.subscribers.forEach(subscriber => subscriber.next(value));
    }
  }

  public error(error?: unknown): void {
    if (this.isStopped) {
      return;
    }
    this.isStopped = true;
    this.hasError = true;
    this.thrownError = error;
    this.subscribers.forEach(subscriber => subscriber.error(error));
  }

  public complete() {
    if (this.isStopped) {
      return;
    }
    this.isStopped = true;
    this.subscribers.forEach(subscriber => subscriber.complete());
  }

  public unsubscribe() {
    this.isStopped = true;
    this.subscribers = [];
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return subscriber;
    }
    if (this.isStopped) {
      subscriber.complete();
      return subscriber;
    }
    this.subscribers.push(subscriber);
    return new SubjectSubscription(this, subscriber);
  }
}