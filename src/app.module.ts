import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerTjalService } from './crawlers/crawler_tjal/crawler_tjal.service';
import { CrawlerTjal1Controller } from './crawlers/crawler_tjal/crawler_tjal.controller';
import { CrawlerTjal1Module } from './crawlers/crawler_tjal/crawler_tjal.module';
import { CrawlerTjce1Module } from './crawlers/crawler_tjce/crawler_tjce_1.module';
import { CrawlerTjce1Controller } from './crawlers/crawler_tjce/crawler_tjce_1.controller';
import { CrawlerTjce1Service } from './crawlers/crawler_tjce/crawler_tjce_1.service';
import { ApiController } from './api/controllers/api.controller';
import { ApiService } from './api/services/api.service';
import { ApiModule } from './api/modules/api.module';
import { FirstInstance } from './crawlers/crawler_tjal/utils/firstInstance';
import { SecondInstance } from './crawlers/crawler_tjal/utils/secondInstance';

@Module({
  imports: [CrawlerTjal1Module, CrawlerTjce1Module, ApiModule],
  controllers: [
    AppController,
    CrawlerTjal1Controller,
    CrawlerTjce1Controller,
    ApiController,
  ],
  providers: [
    AppService,
    CrawlerTjalService,
    CrawlerTjce1Service,
    FirstInstance,
    SecondInstance,
    ApiService,
  ],
})
export class AppModule {}
