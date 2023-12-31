import { SecondInstanceCE } from './secondInstance';

jest.mock('puppeteer');

describe('SecondInstanceCE', () => {
  let secondInstanceCE: SecondInstanceCE;

  beforeEach(() => {
    secondInstanceCE = new SecondInstanceCE();
  });

  describe('getDataTJCESegundaInstancia', () => {
    it('should get data from TJCE segunda instancia', async () => {
      const mockPage = {
        goto: jest.fn(),
        type: jest.fn(),
        keyboard: { press: jest.fn() },
        waitForSelector: jest.fn(),
        content: jest.fn().mockResolvedValue('<html>Mock HTML content</html>'),
        close: jest.fn(),
        click: jest.fn(),
      };

      (secondInstanceCE as any)['browserSegundaInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };
      const url = 'https://esaj.tjce.jus.br/cpopg5/open.do';
      const processNumber = '0070337-91.2008.8.06.0001';
      const data = await secondInstanceCE.getDataTJCESegundaInstancia(
        url,
        processNumber,
      );
      expect(data).not.toBeNull();
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

    it('should handle errors and return null', async () => {
      const mockPage = {
        goto: jest.fn().mockRejectedValue(new Error('Mock error')),
        close: jest.fn(),
      };

      (secondInstanceCE as any)['browserSegundaInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };
      const url = 'https://esaj.tjce.jus.br/cpopg5/open.do';
      const processNumber = '0070337-91.2008.8.02.0001';
      const data = await secondInstanceCE.getDataTJCESegundaInstancia(
        url,
        processNumber,
      );
      expect(data).toBeNull();
    }, 60000);
  });
});
