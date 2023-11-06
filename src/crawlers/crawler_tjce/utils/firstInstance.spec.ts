import * as puppeteer from 'puppeteer';
import { FirstInstanceCE } from './fistInstance';

describe('FirstInstanceCE', () => {
  let firstInstanceCE: FirstInstanceCE;
  let mockBrowser: puppeteer.Browser;

  beforeEach(async () => {
    mockBrowser = {} as puppeteer.Browser;
    firstInstanceCE = new FirstInstanceCE();
    firstInstanceCE['browserPrimeiraInstancia'] = mockBrowser;
  });

  it('should initialize browser', async () => {
    const puppeteerLaunchSpy = jest.spyOn(puppeteer, 'launch').mockResolvedValue(mockBrowser);
    await firstInstanceCE.initializeBrowser();
    expect(puppeteerLaunchSpy).toHaveBeenCalledWith({ headless: 'new' });
  });
});
