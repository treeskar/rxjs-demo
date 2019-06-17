import { Subscription } from './subscription';

const error: Error = new Error('Test Error');

describe('Subscription', () => {
  let unsubscribeFn: () => void;
  let subscription: Subscription;

  beforeEach(() => {
    // create unsubscribe mock function
    unsubscribeFn = jest.fn().mockName('unsubscribe handler');
    // create subscription
    subscription = new Subscription(unsubscribeFn);
  });

  test('unsubscribe', () => {
    // call unsubscribe method twice
    subscription.unsubscribe();
    subscription.unsubscribe();
    // validate that unsubscribe function was called one time only
    expect(unsubscribeFn).toBeCalledTimes(1);
  });

  test('add/remove', () => {
    // create and add first child subscription
    const unsubscribeFn1 = jest.fn();
    const childSub1 = new Subscription(unsubscribeFn1);
    subscription.add(childSub1);
    // create and add second child subscription
    const unsubscribeFn2 = jest.fn();
    const childSub2 = new Subscription(unsubscribeFn2);
    subscription.add(childSub2);
    // remove first child subscription
    subscription.remove(childSub1);
    // call unsubscribe method
    subscription.unsubscribe();
    // validate that first (removed) child subscription was not called
    expect(unsubscribeFn1).not.toBeCalled();
    // validate that second child subscription was called
    expect(unsubscribeFn2).toBeCalled();
  });
});
