context('test case', () => {
    beforeEach(() => {
        cy.visit('www.google.com');
    });

    it('google', () => {
      cy.get('[id="hplogo"]').eq(0)
        .should('be.visible');
    });
});
