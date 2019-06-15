function toNumber(number: string): number {
  return parseInt(number, 10);
}

function sumOperator(...args: string[]): number {
  const result = args.reduce(
    (acc, number) => acc + toNumber(number),
    toNumber(args.shift())
  );
  if (Number.isNaN(result)) {
    throw Error('Each argument has to be a number');
  }
  return result;
}

function minusOperator(...args: string[]): number {
  const result = args.reduce(
    (acc, number) => acc - toNumber(number),
    toNumber(args.shift())
  );
  if (Number.isNaN(result)) {
    throw Error('Each argument has to be a number');
  }
  return result;
}

function maxOperator(...args: string[]): number {
  return Math.max(...args.map(number => toNumber(number)));
}

function minOperator(...args: string[]): number {
  return Math.min(...args.map(number => toNumber(number)));
}

function powOperator(base: string, exponent: string): number {
  return Math.pow(toNumber(base), toNumber(exponent));
}

function sortOperator(...args: string[]): number | string {
  return args.sort().join(', ');
}

export type FunctionType = (...args: string[]) => string | number;

export const FUNCTIONS: Map<string, FunctionType> = new Map([
  ['SUM', sumOperator],
  ['MINUS', minusOperator],
  ['MAX', maxOperator],
  ['MIN', minOperator],
  ['POW', powOperator],
  ['SORT', sortOperator],
]);
