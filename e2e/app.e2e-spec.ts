import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('ng5-jasmin-karma-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display home page', () => {
    expect(page.getParagraphText()).toContain('home');
  });

  it('should display login form', () => {
    expect(element(by.tagName('form')).isPresent()).toBe(true);
  });

  it('should login failed by invalid credentials', () => {
    element(by.css('[formcontrolname="username"]')).sendKeys('testmail');
    element(by.css('[formcontrolname="password"]')).sendKeys('12');
    element(by.id('buttonLogin')).click();
    expect(browser.getCurrentUrl()).not.toContain('/dashboard');
  });

  it('should login success and redirect to dashboard page', () => {
    element(by.css('[formcontrolname="username"]')).sendKeys('testmail@er.com');
    element(by.css('[formcontrolname="password"]')).sendKeys('1234');
    element(by.id('buttonLogin')).click();
    expect(browser.getCurrentUrl()).toContain('/dashboard');
  });


});
