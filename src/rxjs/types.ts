import { Observable } from './observable';
import { Subject } from './subject';
import { BehaviorSubject } from './behaviorSubject';

export type nextType<T> = (value?: T) => void;
export type errorType = (error?: any) => void;
export type completeType = () => void;

export interface IObserver<T> {
  next: nextType<T>;
  error: errorType;
  complete: completeType;
}

export type nextOrObserverType<T> = IObserver<T> | nextType<T>;

export type ObservableInputType<T> =
  | Observable<T>
  | Subject<T>
  | BehaviorSubject<T>;

export type OperatorFunctionType<T, R> = (
  observable: Observable<T>
) => Observable<R>;