import { Module } from '@nestjs/common';;
import { CrawlerTjce2Controller } from './crawler_tjce_2.controller';
import { CrawlerTjce2Service } from './crawler_tjce_2.service';

@Module({
  providers: [CrawlerTjce2Service],
  controllers: [CrawlerTjce2Controller],
})
export class CrawlerTjce2Module {}

