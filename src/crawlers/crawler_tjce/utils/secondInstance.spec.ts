import * as puppeteer from 'puppeteer';
import { SecondInstanceCE } from './secondInstance';

describe('SecondInstanceCE', () => {
  let secondInstanceCE: SecondInstanceCE;
  let mockBrowser: puppeteer.Browser;

  beforeEach(async () => {
    mockBrowser = {} as puppeteer.Browser;
    const puppeteerLaunchSpy = jest.spyOn(puppeteer, 'launch').mockResolvedValue(mockBrowser);
    secondInstanceCE = new SecondInstanceCE();
    await secondInstanceCE.initializeBrowser();
    expect(puppeteerLaunchSpy).toHaveBeenCalledWith({ headless: 'new' });
  });

  it('should initialize browser', async() => {
    const puppeteerLaunchSpy = jest.spyOn(puppeteer, 'launch').mockResolvedValue(mockBrowser);
    await secondInstanceCE.initializeBrowser();
    expect(puppeteerLaunchSpy).toHaveBeenCalledWith({ headless: 'new' });
  });
});