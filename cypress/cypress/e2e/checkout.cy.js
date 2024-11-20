describe('Testes de Finalização de Compra', () => {
    beforeEach(() => {
      cy.fixture('users').then((users) => {
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        cy.login(users.validUser.username, users.validUser.password);
        cy.addToCart('Sauce Labs Backpack');
        cy.get('.shopping_cart_link').click();
        //cy.get('[data-test="checkout"]').click();
      });
    });
  
    it('Deve finalizar compra com sucesso', () => {
        cy.checkout('John', 'Doe', '12345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
  
    it('Deve exibir mensagem de erro ao tentar finalizar sem preencher os campos', () => {
        cy.checkout('', 'Doe', '12345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
    });
  });
  