import { Subject } from './subject';
import { Subscription } from './subscription';
import { Subscriber } from './subscriber';

export class BehaviorSubject<T> extends Subject<T> {
  constructor(public value: T) {
    super();
  }

  public next(value: T): void {
    this.value = value;
    super.next(value);
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    if (!this.isStopped) {
      subscriber.next(this.value);
    }
    return super._subscribe(subscriber);
  }
}