import { RoutingServicePage } from './app.po';

describe('routing-service App', () => {
  let page: RoutingServicePage;

  beforeEach(() => {
    page = new RoutingServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
