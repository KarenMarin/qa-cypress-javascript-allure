import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";

Given('que estou na tela de login', () => {
  loginPage.acessarPagina();
});

When('eu digito o usuário {string}', (usuario) => {
  loginPage.preencherUsuario(usuario);
});

When('eu digito a senha {string}', (senha) => {
  loginPage.preencherSenha(senha);
});

When('clico no botão de login', () => {
  loginPage.clicarLogin();
});

Then('devo ver a lista de produtos', () => {
  cy.contains("Products").should("be.visible");
});
