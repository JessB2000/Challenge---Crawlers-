import { Injectable } from '@nestjs/common';
import { FirstInstance } from './utils/firstInstance';
import { SecondInstance } from './utils/secondInstance';

@Injectable()
export class CrawlerTjalService {
  constructor(
    private dadosPrimeiraInstancia: FirstInstance,
    private dadosSegundaInstancia: SecondInstance,
  ) {}

  async getDataInstances(processNumber: string) {
    const urlPrimeiraInstancia = 'https://www2.tjal.jus.br/cpopg/open.do';
    const urlSegundaInstancia = 'https://www2.tjal.jus.br/cposg5/open.do';

    await this.dadosPrimeiraInstancia.initializeBrowser();
    await this.dadosSegundaInstancia.initializeBrowser();

    try {
      const primeiraInstancia =
        await this.dadosPrimeiraInstancia.getDataTJALPrimeiraInstancia(
          urlPrimeiraInstancia,
          processNumber,
        );
      const segundaInstancia =
        await this.dadosSegundaInstancia.getDataTJALSegundaInstancia(
          urlSegundaInstancia,
          processNumber,
        );
      return { primeiraInstancia, segundaInstancia };
    } finally {
      await this.dadosPrimeiraInstancia.closeBrowser();
    }
  }
}
