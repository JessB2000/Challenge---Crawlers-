import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CrawlerTjalService } from './crawler_tjal.service';

@Controller('crawler-tjal-1')
export class CrawlerTjal1Controller {
  constructor(private readonly crawlerTjal1Service: CrawlerTjalService) {}
  @Get(':process')
  async getProcessDetails(
    @Param('process') processNumber: string,
  ): Promise<any> {
    const processData =
      await this.crawlerTjal1Service.getDataInstances(processNumber);
    if (!processData) {
      throw new NotFoundException(
        `Processo com número ${processNumber} não encontrado`,
      );
    }
    return processData;
  }
}
