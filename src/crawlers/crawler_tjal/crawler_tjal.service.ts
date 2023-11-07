import { Injectable } from '@nestjs/common';
import { FirstInstanceAL } from './utils/firstInstance';
import { SecondInstanceAL } from './utils/secondInstance';

@Injectable()
export class CrawlerTjalService {
  constructor(
    private dadosPrimeiraInstancia: FirstInstanceAL,
    private dadosSegundaInstancia: SecondInstanceAL,
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
    }catch (error) {
      console.error('Erro ao obter detalhes do processo', error);
      return null;
    } finally {
      await this.dadosPrimeiraInstancia.closeBrowser();
    }
  }
}
