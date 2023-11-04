import { Module } from '@nestjs/common';
import { CrawlerTjal1Controller } from './crawler_tjal.controller';
import { CrawlerTjalService } from './crawler_tjal.service';
import { FirstInstance } from './utils/firstInstance';
import { SecondInstance } from './utils/secondInstance';
import { FirstInstanceModule } from './utils/firstInstance.module';
import { SecondInstanceModule } from './utils/secondInstance.module';

@Module({
  imports: [FirstInstanceModule, SecondInstanceModule],
  controllers: [CrawlerTjal1Controller],
  providers: [CrawlerTjalService, FirstInstance, SecondInstance],
})
export class CrawlerTjal1Module {}
