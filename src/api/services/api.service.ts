import { Injectable } from '@nestjs/common';
import { CrawlerTjalService } from 'src/crawlers/crawler_tjal/crawler_tjal.service';
import { CrawlerTjceService } from 'src/crawlers/crawler_tjce/crawler_tjce.service';

@Injectable()
export class ApiService {
  constructor(
    private readonly crawlerTjalService: CrawlerTjalService,
    private readonly crawlerTjceService: CrawlerTjceService,
  ) {}

  async getProcessos(numeroProcesso: string) {
    try {
      const valor = numeroProcesso.slice(16, 20);
      if (valor == '8.02') {
        return this.crawlerTjalService.getDataInstances(numeroProcesso);
      } else if (valor == '8.06') {
        return this.crawlerTjceService.getDataInstances(numeroProcesso);
      }
    } catch (error) {
      console.error('Erro ao obter os detalhes do processo.', error);
      return null;
    }
  }
}
