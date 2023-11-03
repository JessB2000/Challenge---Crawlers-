import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CrawlerTjal2Service } from './crawler_tjal_2.service';


@Controller('crawler-tjal-2')
export class CrawlerTjal2Controller {
    constructor(private readonly crawlerTjal2: CrawlerTjal2Service) {}

    @Get(':process')
    async getProcessDetails(@Param('process') processCod: string): Promise<any> {
      const processData = await this.crawlerTjal2.getProcessTwo(processCod);
      if (!processData) {
        throw new NotFoundException(
          `Processo com codigo ${processCod} não encontrado`,
        );
      }
      return processData;
    }
}
