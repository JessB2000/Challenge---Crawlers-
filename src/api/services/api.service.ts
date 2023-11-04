import { Injectable } from '@nestjs/common';
import { CrawlerTjalService } from 'src/crawlers/crawler_tjal/crawler_tjal.service';
import { CrawlerTjce1Service } from 'src/crawlers/crawler_tjce/crawler_tjce_1.service';

@Injectable()
export class ApiService {
  constructor(
    private readonly crawlerTjalService: CrawlerTjalService,
    private readonly crawlerTjce1Service: CrawlerTjce1Service,
  ) {}

  async getProcessos(numeroProcesso: string) {
    try {
      return this.crawlerTjalService.getDataInstances(numeroProcesso);
    } catch (error) {
      console.error('Erro ao obter os detalhes do processo.', error);
      return null;
    }
  }
}
