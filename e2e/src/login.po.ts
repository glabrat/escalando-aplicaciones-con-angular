import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email' : 'mat-card-content input[name="email"]',
    'password' : 'mat-card-content input[name="password"]',
    'checkbox' : 'mat-card-actions mat-checkbox',
    'selectGroup' : 'mat-card-content mat-select',
    'loginButton' : 'mat-card-actions > button > span',
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  getSelectGrupoText() {
    return element(by.css(this.selectors['selectGroup'])).getText();
  }

  getEmailHint() {
    return element.all(by.css('#mat-hint-0'));
  }

  getLoginButton() {
    return element(by.css(this.selectors['loginButton'])).getText();
  }

  getCheckbox() {
    return element(by.css(this.selectors['checkbox'])).getText();
  }

  setEmail() {
    element(by.css(this.selectors['email'])).sendKeys('admin');
  }

  setPassword() {
    element(by.css(this.selectors['password'])).sendKeys('admin');
  }

  selectGroup() {
    element(by.css('option[value="A"]')).click();
  }

  logIn() {
    element(by.css(this.selectors['form'])).submit();
  }

  pwd() {
      return browser.getCurrentUrl();
  }

}
