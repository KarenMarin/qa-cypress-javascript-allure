# language: pt

Funcionalidade: Login no SauceDemo

  Cenário: Login com sucesso
    Dado que estou na tela de login
    Quando eu digito o usuário "standard_user" 
    Quando eu digito a senha "secret_sauce"
    Quando clico no botão de login
    Então devo ver a lista de produtos
