import { Observable} from '../observable';
import { Subscriber } from '../subscriber';
import { OperatorFunctionType } from '../types';

export function share<T>(): OperatorFunctionType<T, T> {
	let cache: Observable<T>;
	return (source: Observable<T>) => {
		if (!cache) {
			cache = new Observable((subscriber: Subscriber<T>) => shareOperator(source, subscriber));
		}
		return cache;
	}
}

function shareOperator<T>(
	source: Observable<T>,
	subscriber: Subscriber<T>
): Subscriber<T> {
	const subscription = source.subscribe(
		value => subscriber.next(value),
		error => subscriber.error(error),
		() => subscriber.complete()
	);
	subscriber.add(subscription);
	return subscriber;
}
