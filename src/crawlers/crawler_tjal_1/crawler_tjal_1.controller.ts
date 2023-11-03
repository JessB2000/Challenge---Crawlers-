import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CrawlerTjal1Service } from './crawler_tjal_1.service';

@Controller('crawler-tjal-1')
export class CrawlerTjal1Controller {
    constructor(private readonly crawlerTjal1Service: CrawlerTjal1Service) {}
    @Get(':process')
    async getProcessDetails(
      @Param('process') processNumber: string,
    ): Promise<any> {
      const processData = await this.crawlerTjal1Service.getProcessOne(processNumber);
      if (!processData) {
        throw new NotFoundException(
          `Processo com número ${processNumber} não encontrado`,
        );
      }
      return processData;
    }
}
