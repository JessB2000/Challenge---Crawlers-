import * as puppeteer from 'puppeteer';
import { FirstInstanceAL } from './firstInstance';

describe('FirstInstanceAL', () => {
  let firstInstanceAL: FirstInstanceAL;
  let mockBrowser: puppeteer.Browser;

  beforeEach(async () => {
    mockBrowser = {} as puppeteer.Browser;
    firstInstanceAL = new FirstInstanceAL();
    firstInstanceAL['browserPrimeiraInstancia'] = mockBrowser;
  });

  it('should initialize browser', async () => {
    const puppeteerLaunchSpy = jest.spyOn(puppeteer, 'launch').mockResolvedValue(mockBrowser);
    await firstInstanceAL.initializeBrowser();
    expect(puppeteerLaunchSpy).toHaveBeenCalledWith({ headless: 'new' });
  });
});