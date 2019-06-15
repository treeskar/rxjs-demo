import JSX from './jsx';

export const ALPHABET: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
export const NUMBERS: number[] = Array.from({length: 6}, (v, i) => i + 1);

export const cellsElement: HTMLElement = (
  <section className="cells" tabindex="0">
    <div className="th-y"/>
    {ALPHABET.map(x => (
      <div className="th-x" data-x={x}/>
    ))}
    {NUMBERS.reduce(
      (acc, y) => [
        ...acc,
        <div className="th-y" data-y={y}/>,
        ...ALPHABET.map(x => <div className="cell" data-id={x + y}/>),
      ],
      []
    )}
  </section>
);

export const inputElement: HTMLInputElement = (
  <input className="primary-input" type="text" placeholder="No data" />
);

export const cellAddressElement: HTMLElement = <i className="cell-address"/>;
export const errorMessageElement: HTMLElement = <p className="error-message"/>;
export const gridElement = (
  <section className="grid">
    {cellsElement}
    {inputElement}
    {cellAddressElement}
    {errorMessageElement}
  </section>
);
