import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CrawlerTjceService } from '../service/crawler_tjce.service';

@Controller('crawler-tjce')
export class CrawlerTjceController {
  constructor(private readonly crawlerTjceService: CrawlerTjceService) {}

  @Get(':process')
  async getProcessDetails(
    @Param('process') processNumber: string,
  ): Promise<any> {
    const processData =
      await this.crawlerTjceService.getDataInstances(processNumber);
    if (!processData) {
      throw new NotFoundException(
        `Processo com número ${processNumber} não encontrado`,
      );
    }
    return processData;
  }
}
