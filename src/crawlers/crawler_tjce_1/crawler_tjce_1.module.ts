import { Module } from '@nestjs/common';
import { CrawlerTjce1Controller } from './crawler_tjce_1.controller';
import { CrawlerTjce1Service } from './crawler_tjce_1.service';

@Module({
  controllers: [CrawlerTjce1Controller],
  providers: [CrawlerTjce1Service]
})
export class CrawlerTjce1Module {}
