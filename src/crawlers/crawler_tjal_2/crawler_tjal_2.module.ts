import { Module } from '@nestjs/common';
import { CrawlerTjal2Controller } from './crawler_tjal_2.controller';
import { CrawlerTjal2Service } from './crawler_tjal_2.service';

@Module({
  controllers: [CrawlerTjal2Controller],
  providers: [CrawlerTjal2Service]
})
export class CrawlerTjal2Module {}
