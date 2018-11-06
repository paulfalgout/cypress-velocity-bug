describe('In v3.1.1', function() {
    it('should work', function() {
        cy.visit('index.html');
        cy.get('button').click();
        cy.get('.text').should('have.css', 'display').and('eq', 'block');
    });
});