describe('Contains all the tests for UI/UX assignment', () => {
  it('Should check that the website is running and live on localhost and displays an h1 element', () => {
    cy.request('/').its('status').should('eq', 200);
    cy.visit('/');
    cy.contains('h1', 'Hacker Escape Rooms').should('be.visible');
  });
  it('Should filter for a specific challenge and check that it is visible', () => {
    cy.visit('/');
    cy.get('.button-wrapper__onsite').first().click();
    cy.get('#filter-btn').click();
    cy.get('.filterInput').type('Shell online');
    cy.contains('h3', 'Shell online').should('be.visible');
  });
  it('Should navigate through the challenges and contact page', () => {
    cy.visit('/');
    cy.get('.button-wrapper__onsite').first().click();
    cy.get('.contactUsBtn').click();
    cy.contains('.submit-btn', 'Submit').should('be.visible');
  });
  it('Should check if no 5 star challenges is found', () => {
    cy.visit('/challenges.html');
    cy.get('#filter-btn').click();
    cy.get('.stars-container-left i').last().click();
    cy.get('.stars-container-right i').last().click();
    cy.get('.noChallengesFound').should('be.visible');
  });
});
