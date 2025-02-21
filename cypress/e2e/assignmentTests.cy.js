describe('Contains all the tests for UI/UX assignment', () => {
  it('Should check that the website is running and live on localhost and displays an h1 element', () => {
    cy.request('/').its('status').should('eq', 200);
    cy.visit('/');
    cy.contains('h1', 'Hacker Escape Rooms').should('be.visible');
  });
});
