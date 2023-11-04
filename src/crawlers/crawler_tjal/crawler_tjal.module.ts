import { Module } from '@nestjs/common';
import { CrawlerTjal1Controller } from './crawler_tjal.controller';
import { CrawlerTjalService } from './crawler_tjal.service';

@Module({
  controllers: [CrawlerTjal1Controller],
  providers: [CrawlerTjalService],
})
export class CrawlerTjal1Module {}
