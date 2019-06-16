import { Observable} from '../observable';
import { Subscriber } from '../subscriber';
import { OperatorFunctionType } from '../types';

type SideOperationFunctionType<T> = (value: T, index: number) => void;

export function tap<T>(
	sideOperation: SideOperationFunctionType<T>
): OperatorFunctionType<T, T> {
	return (source: Observable<T>) =>
		new Observable((subscriber: Subscriber<T>) =>
			tapOperator<T>(sideOperation, source, subscriber)
		);
}

function tapOperator<T>(
	sideOperation: SideOperationFunctionType<T>,
	source: Observable<T>,
	subscriber: Subscriber<T>
) {
	let count = 0;
	const nextHandler = (value: T) => {
		try {
			sideOperation(value, count++);
		} catch (error) {
			subscriber.error(error);
			return;
		}
		subscriber.next(value);
	};
	const subscription = source.subscribe(
		nextHandler,
		error => subscriber.error(error),
		() => subscriber.complete()
	);
	subscriber.add(subscription);
	return subscriber;
}
