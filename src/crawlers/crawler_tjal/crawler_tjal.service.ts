import * as puppeteer from 'puppeteer';
import { Injectable } from '@nestjs/common';
import { FirstInstance } from './utils/firstInstance';

@Injectable()
export class CrawlerTjalService {
  private dadosPrimeiraInstancia: FirstInstance;
  private dadosSegundaInstancia: puppeteer.Browser;

  async getDataInstances(processNumber: string) {
    const urlPrimeiraInstancia = 'https://www2.tjal.jus.br/cpopg/open.do';
    const urlSegundaInstancia = 'https://www2.tjal.jus.br/cposg5/open.do';

    await this.dadosPrimeiraInstancia.initializeBrowser();

    try {
      const primeiraInstancia =
        await this.dadosPrimeiraInstancia.getDataTJALPrimeiraInstancia(
          urlPrimeiraInstancia,
          processNumber,
        );
      const segundaInstancia =
        await this.dadosPrimeiraInstancia.getDataTJALPrimeiraInstancia(
          urlSegundaInstancia,
          processNumber,
        );
      return { primeiraInstancia, segundaInstancia };
    } finally {
      await this.dadosPrimeiraInstancia.closeBrowser();
    }
  }
}
