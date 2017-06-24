import { SitePage } from './app.po';

describe('site App', () => {
  let page: SitePage;

  beforeEach(() => {
    page = new SitePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
