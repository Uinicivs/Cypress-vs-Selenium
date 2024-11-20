# Testes Automatizados - Cypress e Selenium

Este projeto contém dois conjuntos de testes automatizados para uma página web:

- **Cypress**: Utiliza Node.js e está localizado na pasta `cypress`.
- **Selenium**: Utiliza Python e está localizado na pasta `pythonSelenium`.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (recomendado: versão 16 ou superior)
- **Python** (recomendado: versão 3.8 ou superior)
- **npm** (geralmente instalado com o Node.js)
- **pip** (gerenciador de pacotes do Python)

## Configuração e Execução

### Cypress

1. **Acesse o diretório do Cypress**:
   ```bash
       cd cypress
       npm install
       npm run cypress
   ```

### Cypress

1. **Acesse o diretório do Selenium**:
   ```bash
       cd pythonSelenium
       python -m venv .venv
       .venv/scripts/activate
       pip install -r requirements.txt
       pytest --html=report.html
   ```
