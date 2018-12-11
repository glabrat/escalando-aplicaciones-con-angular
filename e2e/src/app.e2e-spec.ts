import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('App');
  });

  it('should display correct headers', () => {
    const headers = [
      'What is Lorem Ipsum?', 'What is Lorem Ipsum?'
    ];
    page.navigateTo();

    const dashboardItems = page.getItemDashboardHeaders();
    headers.forEach((title, index) => {
      expect(dashboardItems.get(index).getText()).toEqual(title);
    });
  });
});
