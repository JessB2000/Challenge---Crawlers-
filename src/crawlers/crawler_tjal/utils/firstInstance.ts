import * as puppeteer from 'puppeteer';
import cheerio from 'cheerio';

export class FirstInstance {
  private browserPrimeiraInstancia: puppeteer.Browser;
  private browserSegundaInstancia: puppeteer.Browser;

  constructor() {}

  async initializeBrowser() {
    this.browserPrimeiraInstancia = await puppeteer.launch({ headless: 'new' });
    this.browserSegundaInstancia = await puppeteer.launch({ headless: 'new' });
  }

  async closeBrowser() {
    if (this.browserPrimeiraInstancia) {
      await this.browserPrimeiraInstancia.close();
    }
    if (this.browserSegundaInstancia) {
      await this.browserSegundaInstancia.close();
    }
  }

  async getDataTJALPrimeiraInstancia(url: string, processNumber: string) {
    const pagina = await this.browserPrimeiraInstancia.newPage();
    try {
      const parteNumero = processNumber.slice(0, 15);
      const parteDoisNumero = processNumber.slice(21, 25);
      await pagina.goto(url, { waitUntil: 'networkidle2' });
      await pagina.type('#numeroDigitoAnoUnificado', parteNumero);
      await pagina.type('#foroNumeroUnificado', parteDoisNumero);
      console.log(parteNumero);
      console.log(parteDoisNumero);
      console.log('cheguei aq');
      await pagina.keyboard.press('Enter');
      console.log('cheguei aq tb');
      await pagina.waitForSelector('#tabelaUltimasMovimentacoes', {
        timeout: 60000,
      });
      console.log('cheguei aq tb a');
      const content = await pagina.content();
      const $ = cheerio.load(content);

      const numero = $('#numeroProcesso')
        .text()
        .replace(/\n|\t|\r/g, '')
        .replace(/\s{2,}/g, ' ');
      const classe = $('#classeProcesso')
        .text()
        .replace(/\n|\t|\r/g, '')
        .replace(/\s{2,}/g, ' ');
      const area = $('#areaProcesso')
        .text()
        .replace(/\n|\t|\r/g, '')
        .replace(/\s{2,}/g, ' ');
      const dataDistribuicao = $('#dataHoraDistribuicaoProcesso')
        .text()
        .slice(0, 9)
        .replace(/\n|\t|\r/g, '')
        .replace(/\s{2,}/g, ' ');
      const valorAcao = $('#valorAcaoProcesso')
        .text()
        .replace(/\n|\t|\r/g, '')
        .replace(/\s{2,}/g, ' ');

      const partesProcesso: { pessoa: string; envolvidos: string }[] = [];
      const movimentacoesLista: { data: string; movimento: string }[] = [];

      $('#tableTodasPartes tr').each((index, element) => {
        const pessoa = $(element)
          .find('td:nth-child(1)')
          .text()
          .replace(/\n|\t|\r/g, '')
          .replace(/\s{2,}/g, ' ');
        const envolvidos = $(element)
          .find('td:nth-child(2)')
          .text()
          .replace(/\n|\t|\r/g, '')
          .replace(/\s{2,}/g, ' ');
        partesProcesso.push({ pessoa, envolvidos });
      });

      $('#tabelaUltimasMovimentacoes tr').each((index, element) => {
        const data = $(element)
          .find('td:nth-child(1)')
          .text()
          .replace(/\n|\t|\r/g, '')
          .replace(/\s{2,}/g, ' ');
        const movimento = $(element)
          .find('td:nth-child(3)')
          .text()
          .replace(/\n|\t|\r/g, '')
          .replace(/\s{2,}/g, ' ');
        movimentacoesLista.push({ data, movimento });
      });

      return {
        numero,
        classe,
        area,
        dataDistribuicao,
        valorAcao,
        partesProcesso,
        movimentacoesLista,
      };
    } catch (error) {
      console.error('Erro ao obter detalhes do processo', error);
      return null;
    } finally {
      await pagina.close();
    }
  }
}
