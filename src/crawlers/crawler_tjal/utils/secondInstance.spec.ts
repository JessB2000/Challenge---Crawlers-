import * as puppeteer from 'puppeteer';
import { SecondInstanceAL } from './secondInstance';

describe('SecondInstanceAL', () => {
  let secondInstanceAL: SecondInstanceAL;
  let mockBrowser: puppeteer.Browser;

  beforeEach(async () => {
    mockBrowser = {} as puppeteer.Browser;
    const puppeteerLaunchSpy = jest.spyOn(puppeteer, 'launch').mockResolvedValue(mockBrowser);
    secondInstanceAL = new SecondInstanceAL();
    await secondInstanceAL.initializeBrowser();
    expect(puppeteerLaunchSpy).toHaveBeenCalledWith({ headless: 'new' });
  });

  it('should initialize browser', async() => {
    const puppeteerLaunchSpy = jest.spyOn(puppeteer, 'launch').mockResolvedValue(mockBrowser);
    await secondInstanceAL.initializeBrowser();
    expect(puppeteerLaunchSpy).toHaveBeenCalledWith({ headless: 'new' });
  });
});