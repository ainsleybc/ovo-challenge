import { AppPage } from './app.po';

describe('rock, paper, scissors', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('displays a rock weapon', () => {
    expect(page.isElementPresent('.rock')).toBeTruthy();
  });

  it('displays a paper weapon', () => {
    expect(page.isElementPresent('.paper')).toBeTruthy();
  });

  it('displays a scissors weapon', () => {
    expect(page.isElementPresent('.scissors')).toBeTruthy();
  });

  it('selects a weapon to play with', async () => {
    await page.clickButton('.rock');
    expect(page.getPlayerChoiceText()).toContain('rock');
  });

  it('allows the user to play the game', async () => {
    await page.clickButton('.paper');
    expect(page.isElementPresent('.play')).toBeTruthy();
  });
});
