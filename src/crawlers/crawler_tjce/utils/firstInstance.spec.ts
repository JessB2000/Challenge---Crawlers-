import * as puppeteer from 'puppeteer';
import { FirstInstanceCE } from './fistInstance';
interface MockedBrowser extends puppeteer.Browser {
  newPage: jest.Mock<Promise<puppeteer.Page>, []>;
}
describe('FirstInstanceCE', () => {
  let firstInstanceCE: FirstInstanceCE;
  let mockBrowser: puppeteer.Browser;

  beforeEach(async () => {
    mockBrowser = {
      newPage: jest.fn().mockResolvedValue({} as puppeteer.Page),
    } as MockedBrowser;
    firstInstanceCE = new FirstInstanceCE();
    firstInstanceCE['browserPrimeiraInstancia'] = mockBrowser;
  });

  it('should initialize browser', async () => {
    const puppeteerLaunchSpy = jest
      .spyOn(puppeteer, 'launch')
      .mockResolvedValue(mockBrowser);
    await firstInstanceCE.initializeBrowser();
    expect(puppeteerLaunchSpy).toHaveBeenCalledWith({ headless: 'new' });
  });
  it('should return mocked data in the first instance ', async () => {
    const htmlMock = {
      '#numeroProcesso': '0710802-55.2018.8.02.0001',
      '#classeProcesso': 'Procedimento Comum Cível',
      '#areaProcesso': 'Cível',
      '#dataHoraDistribuicaoProcesso': '02/10/2022',
      '#valorAcaoProcesso': 'R$ 600.000,00',
      '.pessoa': ['Indivíduo 01', 'Indivíduo 02', 'Indivíduo 03'],
      '.envolvidos': ['Pessoas 01', 'Pessoas 02', 'Pessoas 03'],
      '.data': ['06/10/2022', '08/10/2022', '15/10/2022'],
      '.descricao': ['1 movimento', '2 movimento', '3 movimento'],
    };
    const pageMock = jest.fn((selector) => {
      return htmlMock[selector];
    });

    const mockPage = (mockBrowser.newPage = jest.fn(async () => {
      const pageMock: puppeteer.Page = {
        $eval: jest.fn((selector) => htmlMock[selector]),
      } as unknown as puppeteer.Page;
      return pageMock;
    }));

    (puppeteer.launch as jest.Mock).mockResolvedValue({
      newPage: jest.fn().mockResolvedValue(mockPage),
    });

    const url = 'https://www.processos.com';
    const processNumber = '0710802-55.2018.8.02.0001';

    const result = await firstInstanceCE.getDataTJCEPrimeiraInstancia(
      url,
      processNumber,
    );

    expect(result.numero).toBe('0710802-55.2018.8.02.0001');
    expect(result.classe).toBe('Procedimento Comum Cível');
    expect(result.area).toBe('Cível');
    expect(result.dataDistribuicao).toBe('02/10/2022');
    expect(result.valorAcao).toBe('R$ 600.000,00');
    expect(result.partesProcesso.length).toBe(3);
    expect(result.partesProcesso[0].pessoa).toBe('Indivíduo 01');
    expect(result.partesProcesso[0].envolvidos).toBe('Pessoas 01');
    expect(result.partesProcesso[1].pessoa).toBe('Indivíduo 02');
    expect(result.partesProcesso[1].envolvidos).toBe('Pessoas 02');
    expect(result.partesProcesso[2].pessoa).toBe('Indivíduo 03');
    expect(result.partesProcesso[2].envolvidos).toBe('Pessoas 03');
    expect(result.movimentacoesLista.length).toBe(3);
    expect(result.movimentacoesLista[0].data).toBe('06/10/2022');
    expect(result.movimentacoesLista[0].movimento).toBe('1 movimento');
    expect(result.movimentacoesLista[1].data).toBe('08/10/2022');
    expect(result.movimentacoesLista[1].movimento).toBe('2 movimento');
    expect(result.movimentacoesLista[2].data).toBe('15/10/2022');
    expect(result.movimentacoesLista[2].movimento).toBe('3 movimento');
  }, 600000);
});
