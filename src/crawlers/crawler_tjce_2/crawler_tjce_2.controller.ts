import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CrawlerTjce2Service } from './crawler_tjce_2.service';

@Controller('crawler-tjce-2')
export class CrawlerTjce2Controller {
    constructor(private readonly crawlerTjce2Service: CrawlerTjce2Service) {}

  @Get(':process')
  async getProcessDetails(@Param('process') processCod: string): Promise<any> {
    const processData = await this.crawlerTjce2Service.getProcessTwo(processCod);
    if (!processData) {
      throw new NotFoundException(
        `Processo com codigo ${processCod} não encontrado`,
      );
    }
    return processData;
  }
}
