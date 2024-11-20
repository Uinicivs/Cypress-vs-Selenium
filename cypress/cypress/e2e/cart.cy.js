describe('Testes de Carrinho', () => {
    beforeEach(() => {
      cy.fixture('users').then((users) => {
        cy.login(users.validUser.username, users.validUser.password);
      });
    });
  
    it('Deve adicionar um item ao carrinho', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
  
    it('Deve remover um item do carrinho', () => {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('not.exist');
    });
});
  