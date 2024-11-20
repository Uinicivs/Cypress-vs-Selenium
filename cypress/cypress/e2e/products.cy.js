describe('Testes de Produtos', () => {
    beforeEach(() => {
      cy.fixture('users').then((users) => {
        cy.login(users.validUser.username, users.validUser.password);
      });
    });
  
    it('Deve ordenar produtos por preço (do menor para o maior)', () => {
      cy.get('.product_sort_container').select('lohi');
      cy.get('.inventory_item_price')
        .then(($prices) => {
        const prices = [...$prices].map((price) => parseFloat(price.innerText.replace('$', '')));
        expect(prices).to.deep.equal([...prices].sort((a, b) => a - b)); // Verifica se os preços estão ordenados
        });
    });
  
    it('Deve exibir os detalhes de um produto', () => {
      cy.contains('Sauce Labs Backpack').click();
      cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack');
      cy.get('.inventory_details_price').should('exist');
    });
  });
  