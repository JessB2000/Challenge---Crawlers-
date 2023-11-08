import { Module } from '@nestjs/common';
import { CrawlerTjceController } from '../controller/crawler_tjce.controller';
import { CrawlerTjceService } from '../service/crawler_tjce.service';
import { FirstInstanceCEModule } from '../utils/firstInstance.module';
import { SecondInstanceCEModule } from '../utils/secondInstance.module';

@Module({
  imports: [FirstInstanceCEModule, SecondInstanceCEModule],
  controllers: [CrawlerTjceController],
  providers: [CrawlerTjceService],
})
export class CrawlerTjceModule {}
