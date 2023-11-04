import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CrawlerTjce1Service } from './crawler_tjce_1.service';


@Controller('crawler-tjce-1')
export class CrawlerTjce1Controller {
    constructor(private readonly crawlerTjce1Service: CrawlerTjce1Service) {}

    @Get(':process')
    async getProcessDetails(
      @Param('process') processNumber: string,
    ): Promise<any> {
      const processData = await this.crawlerTjce1Service.getProcessOne(processNumber);
      if (!processData) {
        throw new NotFoundException(
          `Processo com número ${processNumber} não encontrado`,
        );
      }
      return processData;
    }
}
