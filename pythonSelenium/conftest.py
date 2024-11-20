import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager


def pytest_addoption(parser):
    """Adiciona opções de linha de comando ao pytest."""
    parser.addoption("--browser", action="store",
                     default="chrome", help="Browser: chrome ou firefox")
    parser.addoption("--base-url", action="store",
                     default="https://www.saucedemo.com", help="URL base para os testes")


@pytest.fixture
def browser(request):
    """Configura e retorna o WebDriver com base no navegador escolhido."""
    browser_name = request.config.getoption("--browser")
    base_url = request.config.getoption("--base-url")

    if browser_name.lower() == "chrome":
        options = ChromeOptions()
        options.add_argument("--start-maximized")
        driver = webdriver.Chrome(service=ChromeService(
            ChromeDriverManager().install()), options=options)
    elif browser_name.lower() == "firefox":
        options = FirefoxOptions()
        driver = webdriver.Firefox(service=FirefoxService(
            GeckoDriverManager().install()), options=options)
    else:
        raise ValueError(f"Navegador '{browser_name}' não é suportado.")

    # Configuração inicial
    driver.get(base_url)
    yield driver
    driver.quit()
