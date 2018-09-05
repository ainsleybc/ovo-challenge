import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public async isElementPresent(elementName: string): Promise<boolean> {
    return element(by.css(elementName)).isPresent();
  }

  public async getHeadingText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  public async clickButton(elementName: string): Promise<void> {
    return element(by.css(elementName)).click();
  }
}
