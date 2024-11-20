Feature: Testes do e-commerce Sauce Demo
  As a user, I want to ensure the Sauce Demo functionalities work as expected.

  Background:
    Given the user is on the Sauce Demo login page

  # Suite: Testes de Login
  @login
  Scenario: Login com credenciais válidas
    When the user logs in with username "standard_user" and password "secret_sauce"
    Then the user should be redirected to the products page

  @login
  Scenario: Login com credenciais inválidas
    When the user logs in with username "invalid_user" and password "wrong_password"
    Then an error message "Username and password do not match" should be displayed

  # Suite: Testes de Produtos
  @products
  Scenario: Ordenar produtos por preço (do menor para o maior)
    Given the user is logged in
    When the user sorts the products by "Price (low to high)"
    Then the products should be displayed in ascending order by price

  @products
  Scenario: Visualizar detalhes de um produto
    Given the user is logged in
    When the user clicks on the "Sauce Labs Backpack" product
    Then the product details page should display the correct name, description, and price

  # Suite: Testes de Carrinho
  @cart
  Scenario: Adicionar um item ao carrinho
    Given the user is logged in
    When the user adds the product "Sauce Labs Backpack" to the cart
    Then the cart icon should display "1"

  @cart
  Scenario: Remover um item do carrinho
    Given the user is logged in and has added "Sauce Labs Backpack" to the cart
    When the user removes the product from the cart
    Then the cart icon should display "0"

  # Suite: Testes de Finalização de Compra
  @checkout
  Scenario: Finalizar compra com sucesso
    Given the user is logged in and has added "Sauce Labs Backpack" to the cart
    When the user proceeds to checkout
    And the user fills in "John" as first name, "Doe" as last name, and "12345" as zip code
    Then the order confirmation page should display "THANK YOU FOR YOUR ORDER"

  @checkout
  Scenario: Tentar finalizar compra sem preencher os campos obrigatórios
    Given the user is logged in and has added "Sauce Labs Backpack" to the cart
    When the user proceeds to checkout without filling in the required fields
    Then an error message "First Name is required" should be displayed
