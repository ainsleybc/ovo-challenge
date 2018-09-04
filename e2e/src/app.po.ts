import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public async isElementPresent(elementName: string): Promise<boolean> {
    return element(by.css(elementName)).isPresent();
  }
}
