import { SecondInstanceAL } from './secondInstance';

jest.mock('puppeteer');

describe('SecondInstanceAL', () => {
  let secondInstanceAL: SecondInstanceAL;

  beforeEach(() => {
    secondInstanceAL = new SecondInstanceAL();
  });

  describe('getDataTJALSegundaInstancia', () => {
    it('should get data from TJAL segunda instancia', async () => {
      const mockPage = {
        goto: jest.fn(),
        type: jest.fn(),
        keyboard: { press: jest.fn() },
        waitForSelector: jest.fn(),
        content: jest.fn().mockResolvedValue('<html>Mock HTML content</html>'),
        close: jest.fn(),
        click: jest.fn(),
      };

      (secondInstanceAL as any)['browserSegundaInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };
      const url = 'https://www2.tjal.jus.br/cpopg5/open.do';
      const processNumber = '0710802-55.2018.8.02.0001';
      const data = await secondInstanceAL.getDataTJALSegundaInstancia(
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

      (secondInstanceAL as any)['browserSegundaInstancia'] = {
        newPage: jest.fn().mockResolvedValue(mockPage),
        close: jest.fn(),
      };
      const url = 'https://www2.tjal.jus.br/cpopg5/open.do';
      const processNumber = '0710802-55.2018.8.06.0001';
      const data = await secondInstanceAL.getDataTJALSegundaInstancia(
        url,
        processNumber,
      );
      expect(data).toBeNull();
    }, 60000);
  });
});
