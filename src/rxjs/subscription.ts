export class Subscription {
  public closed: boolean = false;
  private _subscriptions: Subscription[] = [];

  constructor(unsubscribe?: () => void) {
    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  public add(subscription: Subscription): Subscription {
    this._subscriptions.push(subscription);
    return subscription;
  }

  public remove(subscription: Subscription): void {
    const index = this._subscriptions.indexOf(subscription);
    if (index > -1) {
      this._subscriptions.splice(index, 1);
    }
  }

  public unsubscribe(): void {
    if (this.closed) {
      return;
    }
    this.closed = true;
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
    this._unsubscribe();
  }

  _unsubscribe(): void {}
}
