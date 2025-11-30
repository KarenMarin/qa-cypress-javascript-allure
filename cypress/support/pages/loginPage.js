class LoginPage {
  username = '#user-name';
  password = '#password';
  button = '#login-button';

  acessarPagina() {
    cy.visit('https://www.saucedemo.com');
  }

  preencherUsuario(usuario) {
    cy.get(this.username).type(usuario);
  }

  preencherSenha(senha) {
    cy.get(this.password).type(senha);
  }

  clicarLogin() {
    cy.get(this.button).click();
  }
}

export default new LoginPage();
