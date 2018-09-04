import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('rock, paper, scissors', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('displays a rock weapon', () => {
    page.navigateTo();
    expect(page.isElementPresent('.rock')).toBeTruthy();
  });

  it('displays a paper weapon', () => {
    page.navigateTo();
    expect(page.isElementPresent('.paper')).toBeTruthy();
  });

  it('displays a scissors weapon', () => {
    page.navigateTo();
    expect(page.isElementPresent('.scissors')).toBeTruthy();
  });
});
