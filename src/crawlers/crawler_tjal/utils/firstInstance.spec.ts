import { FirstInstanceAL } from '../utils/firstInstance';

jest.mock('puppeteer');

describe('FirstInstanceAL', () => {
  let firstInstanceAL: FirstInstanceAL;

  beforeEach(() => {
    firstInstanceAL = new FirstInstanceAL();
  });

  describe('initializeBrowser', () => {
    it('should initialize the browser', async () => {
      await firstInstanceAL.initializeBrowser();
      expect(firstInstanceAL['browserPrimeiraInstancia']).not.toBeNull();
    });
  });

  describe('getDataTJALPrimeiraInstancia', () => {
    it('should return the TJAL first instance data', async () => {
      const mockPage = {
        goto: jest.fn(),
        type: jest.fn(),
        keyboard: { press: jest.fn() },
        waitForSelector: jest.fn(),
        content: jest.fn().mockResolvedValue('<html>Mock HTML content</html>'),
        close: jest.fn(),
      };

      (firstInstanceAL as any)['browserPrimeiraInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };
      const url = 'https://www2.tjal.jus.br/cpopg/open.do';
      const processNumber = '0710802-55.2018.8.02.0001';
      const data = await firstInstanceAL.getDataTJALPrimeiraInstancia(
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

      (firstInstanceAL as any)['browserPrimeiraInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };
      const url = 'https://www2.tjal.jus.br/cpopg/open.do';
      const processNumber = '0710802-55.2018.8.06.0001';
      const data = await firstInstanceAL.getDataTJALPrimeiraInstancia(
        url,
        processNumber,
      );
      expect(data).toBeNull();
    }, 60000);
  });
});
