import { Angular4FormPage } from './app.po';

describe('angular4-form App', () => {
  let page: Angular4FormPage;

  beforeEach(() => {
    page = new Angular4FormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
