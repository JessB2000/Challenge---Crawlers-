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
  it ('should return mocked data in the first instance ', async()=>{
    const htmlMock= {
      '#numeroProcesso': '0710802-55.2018.8.02.0001',
      '#classeProcesso': 'Procedimento Comum Cível',
      '#areaProcesso': 'Cível',
      '#dataHoraDistribuicaoProcesso': '05/10/2022',
      '#valorAcaoProcesso': 'R$ 400.000,00',
      '.pessoa': ['Indivíduo 01', 'Indivíduo 02'],
      '.envolvidos': ['Pessoas 01', 'Pessoas 02'],
      '.data': ['06/10/2022', '08/10/2022'],
      '.descricao': ['1 movimento', '2 movimento'],
    };
    const pageMock = jest.fn((selector) => {
      return htmlMock[selector];
    });
    const pageMockI = jest.fn((selector) => {
      return htmlMock[selector] || [];
    });
    const finallyMock: any = {
      $eval: pageMock,
      $$eval: pageMockI,
    };
    (puppeteer.launch as jest.Mock).mockResolvedValue({
      newPage: jest.fn().mockResolvedValue(pageMock),
      close: jest.fn(),
    });

    const url = 'https://www.processos.com';
    const processNumber = '0710802-55.2018.8.02.0001';

    const result = await firstInstanceAL.getDataTJALPrimeiraInstancia(url, processNumber);

    expect(result.numero).toBe('0710802-55.2018.8.02.0001');
    expect(result.classe).toBe('Procedimento Comum Cível');
    expect(result.area).toBe('Cível');
    expect(result.dataDistribuicao).toBe('05/10/2022');
    expect(result.valorAcao).toBe('R$ 400.000,00');
    expect(result.partesProcesso.length).toBe(2);
    expect(result.partesProcesso[0].pessoa).toBe('Indivíduo 01');
    expect(result.partesProcesso[0].envolvidos).toBe('Pessoas 01');
    expect(result.partesProcesso[1].pessoa).toBe('Indivíduo 02');
    expect(result.partesProcesso[1].envolvidos).toBe('Pessoas 02');
    expect(result.movimentacoesLista.length).toBe(2);
    expect(result.movimentacoesLista[0].data).toBe('06/10/2022');
    expect(result.movimentacoesLista[0].movimento).toBe('1 movimento');
    expect(result.movimentacoesLista[1].data).toBe('08/01/2022');
    expect(result.movimentacoesLista[1].movimento).toBe('2 movimento');
  })
});