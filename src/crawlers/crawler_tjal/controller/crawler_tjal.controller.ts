import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CrawlerTjalService } from '../service/crawler_tjal.service';

@Controller('crawler-tjal')
export class CrawlerTjalController {
  constructor(private readonly crawlerTjalService: CrawlerTjalService) {}
  @Get(':process')
  async getProcessDetails(
    @Param('process') processNumber: string,
  ): Promise<any> {
    const processData =
      await this.crawlerTjalService.getDataInstances(processNumber);
    if (!processData) {
      throw new NotFoundException(
        `Processo com número ${processNumber} não encontrado`,
      );
    }
    return processData;
  }
}
