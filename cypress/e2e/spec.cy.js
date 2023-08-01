describe('testing button located in hero image section', () => {
  it('should route to the shop page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('.hero-info a.btn', 'Shop New Arrivals!').click();
    cy.url().should('include', '/shop'); 
  });
});
