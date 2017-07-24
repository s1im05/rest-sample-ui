import { RestSampleUiPage } from './app.po';

describe('rest-sample-ui App', () => {
  let page: RestSampleUiPage;

  beforeEach(() => {
    page = new RestSampleUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
