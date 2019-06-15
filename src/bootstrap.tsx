import JSX from './jsx';

// TODO: 1 create columns and rows
export const ALPHABET: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
export const NUMBERS: number[] = Array.from({length: 6}, (v, i) => i + 1);

// TODO: 2 create cells's container and cells
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

// TODO: 3 create input element
export const inputElement: HTMLInputElement = (
  <input className="primary-input" type="text" placeholder="No data" />
);

// TODO: 4 create grid element
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
