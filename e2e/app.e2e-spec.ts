import { IfelseProjPage } from './app.po';

describe('ifelse-proj App', function() {
  let page: IfelseProjPage;

  beforeEach(() => {
    page = new IfelseProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
