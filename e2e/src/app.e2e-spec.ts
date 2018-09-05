import { AppPage } from './app.po';

describe('rock, paper, scissors', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('has correct heading text', () => {
    expect(page.getHeadingText()).toEqual('Rock, Paper, Scissors.');
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

  it('shows the result of the game', async () => {
    await page.clickButton('.paper');
    expect(page.isElementPresent('.result')).toBeTruthy();
  });

  it('allows the user to play again', async () => {
    await page.clickButton('.paper');
    await page.clickButton('.reset');
    expect(page.isElementPresent('.rock')).toBeTruthy();
  });

  it('shows the current score', async () => {
    await page.clickButton('.paper');
    await page.clickButton('.reset');
    expect(page.isElementPresent('.score')).toBeTruthy();
  });
});
