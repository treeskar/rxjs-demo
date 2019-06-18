enum KEY_CODES {
  ArrowDown = 'ArrowDown',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  ArrowLeft = 'ArrowLeft',
  Enter = 'Enter',
}

const switchToViewMode = () => cy.get('.primary-input').trigger('keydown', { key: KEY_CODES.Enter });
const step = {
  left: () => cy.get('body').trigger('keydown', { key: KEY_CODES.ArrowLeft }),
  right: () => cy.get('body').trigger('keydown', { key: KEY_CODES.ArrowRight }),
  up: () => cy.get('body').trigger('keydown', { key: KEY_CODES.ArrowUp }),
  down: () => cy.get('body').trigger('keydown', { key: KEY_CODES.ArrowDown }),
};
const cell = (cellID: string) => cy.get(`.cell[data-id="${cellID}"]`);
const cells = (...cellIDs: string[]) => {
  const query = cellIDs.map(cellID => `.cell[data-id="${cellID}"]`).join(', ');
  return cy.get(query);
};
const thX = (columnId: string) => cy.get(`.th-x[data-x="${columnId}"]`);
const thY = (rowId: string) => cy.get(`.th-y[data-y="${rowId}"]`);

describe('Extra lite Excel', () => {
  it('Integration test', () => {
    cy.visit('/');
    cy.title().should('eq', 'Excel');
    // test hover interaction
    cell('B2').trigger('mousemove');
    thX('B').should('have.class', 'hover');
    thY('2').should('have.class', 'hover');
    // test select interaction
    cell('B1').click();
    cell('B1').should('have.class', 'focus');
    thX('B').should('have.class', 'focus');
    thY('1').should('have.class', 'focus');
    // test address update
    cy.get('.cell-address').should('have.attr', 'data-address', 'B1');
    // test input interaction
    cy.get('.primary-input').type('10');
    cy.get('.cell[data-id="B1"]').should('contain', '10');
    // test mode toggling INSERT -> VIEW on keydown ENTER
    switchToViewMode();
    // test keyboard navigation
    step.right();
    // test cell reference behavior
    cy.get('.cell-address').should('have.attr', 'data-address', 'C1');
    cy.get('.primary-input').type('=b1');
    cy.get('.cell[data-id="C1"]').should('contain', '10');
    // test mode toggling INSERT -> VIEW on blur event
    cy.get('.primary-input').trigger('blur');
    step.down();
    // test function support
    cy.get('.primary-input').type('=sum(b1, C1, max(C1, 8 ))');
    cell('C2').should('contain', '30').and('have.class', 'focus');
    // test dependency highlighting
    cells('C1', 'B1').should('have.class', 'include');
    // test grid data update flow
    cell('C1').click();
    cy.get('.primary-input').clear().type('5');
    cell('C2').should('contain', '23');
    // test circular dependency flow
    cell('A3').click();
    cy.get('.primary-input').type('=C3');
    cell('B3').click();
    cy.get('.primary-input').type('=A3');
    cell('C3').click();
    cy.get('.primary-input').type('=B3');
    cells('A3', 'B3', 'C3')
      .should('have.attr', 'data-error', 'Circular dependency')
      .and('contain', '#ERROR');
    // test error message flow
    cy.get('.error-message').should('contain', '#ERROR: Circular dependency');
    cell('A1').click();
    cy.get('.error-message').should('contain', '');
  });

});
