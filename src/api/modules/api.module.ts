import { Module } from '@nestjs/common';
import { CrawlerTjce1Controller } from 'src/crawlers/crawler_tjce/crawler_tjce_1.controller';
import { CrawlerTjalService } from 'src/crawlers/crawler_tjal/crawler_tjal.service';
import { CrawlerTjce1Service } from 'src/crawlers/crawler_tjce/crawler_tjce_1.service';
import { CrawlerTjce1Module } from 'src/crawlers/crawler_tjce/crawler_tjce_1.module';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';

@Module({
  imports: [CrawlerTjce1Module],
  controllers: [ApiController, CrawlerTjce1Controller],
  providers: [ApiService, CrawlerTjalService, CrawlerTjce1Service],
})
export class ApiModule {}
