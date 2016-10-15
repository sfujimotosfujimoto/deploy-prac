import { DeployPracPage } from './app.po';

describe('deploy-prac App', function() {
  let page: DeployPracPage;

  beforeEach(() => {
    page = new DeployPracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
