# mypy: ignore-errors

import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from pages.login_page import LoginPage


@pytest.fixture
def driver():
    driver = webdriver.Chrome()  # Substitua por o driver adequado (e.g., Firefox)
    driver.maximize_window()
    yield driver
    driver.quit()


def test_login_valido(driver):
    # Navegar para o Sauce Demo
    driver.get("https://www.saucedemo.com/")

    # Fazer login
    login_page = LoginPage(driver)
    login_page.login("standard_user", "secret_sauce")

    assert "inventory" in driver.current_url, "Login falhou, a URL não contém 'inventory'."


def test_login_invalido(driver):
    # Navegar para o Sauce Demo
    driver.get("https://www.saucedemo.com/")

    # Fazer login
    login_page = LoginPage(driver)
    login_page.login("invalid_user", "wrong_password")

    error_message = driver.find_element(By.XPATH, '//*[@data-test="error"]')
    assert error_message.is_displayed(), "Mensagem de erro não encontrada."
    assert error_message.text == ('Epic sadface: Username and password do '
                                  'not match any user in this service'), "Mensagem de erro inesperada."
