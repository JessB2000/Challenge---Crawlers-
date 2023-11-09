import { FirstInstanceCE } from '../utils/fistInstance';

jest.mock('puppeteer');

describe('FirstInstanceCE', () => {
  let firstInstanceCE: FirstInstanceCE;

  beforeEach(() => {
    firstInstanceCE = new FirstInstanceCE();
  });

  describe('initializeBrowser', () => {
    it('should initialize the browser', async () => {
      await firstInstanceCE.initializeBrowser();
      expect(firstInstanceCE['browserPrimeiraInstancia']).not.toBeNull();
    });
  });

  describe('getDataTJCEPrimeiraInstancia', () => {
    it('should return the TJCE first instance data', async () => {
      const mockPage = {
        goto: jest.fn(),
        type: jest.fn(),
        keyboard: { press: jest.fn() },
        waitForSelector: jest.fn(),
        content: jest.fn().mockResolvedValue('<html>Mock HTML content</html>'),
        close: jest.fn(),
      };

      (firstInstanceCE as any)['browserPrimeiraInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };
      const url = 'https://esaj.tjce.jus.br/cpopg/open.do';
      const processNumber = '0070337-91.2008.8.06.0001';
      const data = await firstInstanceCE.getDataTJCEPrimeiraInstancia(
        url,
        processNumber,
      );
      expect(data).toMatchObject({
        numero: expect.any(String),
        classe: expect.any(String),
        area: expect.any(String),
        dataDistribuicao: expect.any(String),
        valorAcao: expect.any(String),
        partesProcesso: expect.any(Array),
        movimentacoesLista: expect.any(Array),
      });
    }, 60000);

    it('should return null', async () => {
      const mockPage = {
        goto: jest.fn().mockRejectedValue(new Error('Mock error')),
        close: jest.fn(),
      };

      (firstInstanceCE as any)['browserPrimeiraInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };

      const url = 'https://esaj.tjce.jus.br/cpopg/open.do';
      const processNumber = '0070337-91.2008.8.02.0001';

      const data = await firstInstanceCE.getDataTJCEPrimeiraInstancia(
        url,
        processNumber,
      );
      expect(data).toBeNull();
    }, 60000);
  });
});
