import { Injectable, NotFoundException } from '@nestjs/common';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/service/crawler_tjal.service';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/service/crawler_tjce.service';

@Injectable()
export class ApiService {
  constructor(
    private readonly crawlerTjalService: CrawlerTjalService,
    private readonly crawlerTjceService: CrawlerTjceService,
  ) { }

  async getProcessos(numeroProcesso: string): Promise<any | null> {
    try {
      const valor = numeroProcesso.slice(16, 20);
      let processo: any | null = null;

      if (valor === '8.02') {
        processo = this.crawlerTjalService.getDataInstances(numeroProcesso);
      } else if (valor === '8.06') {
        processo = this.crawlerTjceService.getDataInstances(numeroProcesso);
      } else {
        throw new NotFoundException('Crawler não disponível para este número de processo');
      }

      if (!processo) {
        throw new NotFoundException('Processo não encontrado');
      }

      return processo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Erro ao obter os detalhes do processo.', error);
      throw new Error('Erro ao obter os detalhes do processo.');
    }
  }
}
