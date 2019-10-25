import { InfidoteAlgorythmAppPage } from './app.po';

describe('infidote-algorythm-app App', function() {
  let page: InfidoteAlgorythmAppPage;

  beforeEach(() => {
    page = new InfidoteAlgorythmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
