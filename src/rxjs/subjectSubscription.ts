import { Subscription } from './subscription';
import { Subject } from './subject';
import { Subscriber } from './subscriber';

export class SubjectSubscription<T> extends Subscription {
  constructor(private subject: Subject<T>, private subscriber: Subscriber<T>) {
    super();
  }

  _unsubscribe(): void {
    this.subscriber.unsubscribe();
    if (this.subject.isStopped) {
      return;
    }
    const index = this.subject.subscribers.indexOf(this.subscriber);
    if (index > -1) {
      this.subject.subscribers.splice(index, 1);
    }
  }
}