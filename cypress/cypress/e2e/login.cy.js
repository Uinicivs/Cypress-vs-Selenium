describe('Testes de Login', () => {
  beforeEach(() => {
    cy.fixture('users').as('users'); // Carrega os dados do arquivo users.json
  });

  it('Deve fazer login com credenciais válidas', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password);
    cy.url().should('include', '/inventory.html');
  });

  it('Deve exibir mensagem de erro ao usar credenciais inválidas', function () {
    cy.login(this.users.invalidUser.username, this.users.invalidUser.password);
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});
