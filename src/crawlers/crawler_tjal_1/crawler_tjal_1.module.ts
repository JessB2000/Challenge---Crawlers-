import { Module } from '@nestjs/common';
import { CrawlerTjal1Controller } from './crawler_tjal_1.controller';
import { CrawlerTjal1Service } from './crawler_tjal_1.service';

@Module({
  controllers: [CrawlerTjal1Controller],
  providers: [CrawlerTjal1Service],
})
export class CrawlerTjal1Module {}
