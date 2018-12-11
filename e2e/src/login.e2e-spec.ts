import { LoginPage } from './login.po';

describe('workspace-project Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display message at group select', () => {
    page.navigateToLogin();
    expect(page.getSelectGrupoText()).toEqual('Seleccione');
  });

//   it('should display Login in login button', () => {
//     page.navigateToLogin();
//     expect(page.getLoginButton()).toEqual('Login');
//   });

  it('Should login when fill correctly', () => {
    page.navigateToLogin();
    page.setEmail();
    page.setPassword();
    page.selectGroup();
    page.logIn();
    expect(page.pwd()).toMatch('/');
  });
});
