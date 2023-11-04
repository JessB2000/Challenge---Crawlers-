import { Injectable } from '@nestjs/common';
import { FirstInstanceCE } from './utils/fistInstance';
import { SecondInstanceCE } from './utils/secondInstance';

@Injectable()
export class CrawlerTjceService {
  constructor(
    private dadosPrimeiraInstancia: FirstInstanceCE,
    private dadosSegundaInstancia: SecondInstanceCE,
  ) {}

  async getDataInstances(processNumber: string) {
    const urlPrimeiraInstancia = 'https://esaj.tjce.jus.br/cpopg/open.do';
    const urlSegundaInstancia = 'https://esaj.tjce.jus.br/cposg5/open.do';

    await this.dadosPrimeiraInstancia.initializeBrowser();
    await this.dadosSegundaInstancia.initializeBrowser();

    try {
      const primeiraInstancia =
        await this.dadosPrimeiraInstancia.getDataTJCEPrimeiraInstancia(
          urlPrimeiraInstancia,
          processNumber,
        );
      const segundaInstancia =
        await this.dadosSegundaInstancia.getDataTJCESegundaInstancia(
          urlSegundaInstancia,
          processNumber,
        );
      return { primeiraInstancia, segundaInstancia };
    } finally {
      await this.dadosPrimeiraInstancia.closeBrowser();
    }
  }
}
