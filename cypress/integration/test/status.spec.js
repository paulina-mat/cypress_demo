context('Return and check status', () => {
    
    it('should return 200', () => {
        var i = 0
        for (i = 0; i < 15; i++) {
           cy.request({
            url: 'https://google.pl',
          })
            .then((resp) => {
              expect(resp.status).to.eq(200)  
            });
            cy.wait(1000);
        }
    });
});