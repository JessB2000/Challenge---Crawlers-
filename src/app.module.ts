import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerTjal1Service } from './crawlers/crawler_tjal_1/crawler_tjal_1.service';
import { CrawlerTjal1Controller } from './crawlers/crawler_tjal_1/crawler_tjal_1.controller';
import { CrawlerTjal1Module } from './crawlers/crawler_tjal_1/crawler_tjal_1.module';
import { CrawlerTjal2Service } from './crawlers/crawler_tjal_2/crawler_tjal_2.service';
import { CrawlerTjal2Controller } from './crawlers/crawler_tjal_2/crawler_tjal_2.controller';
import { CrawlerTjal2Module } from './crawlers/crawler_tjal_2/crawler_tjal_2.module';
import { CrawlerTjce1Module } from './crawlers/crawler_tjce_1/crawler_tjce_1.module';
import { CrawlerTjce1Controller } from './crawlers/crawler_tjce_1/crawler_tjce_1.controller';
import { CrawlerTjce1Service } from './crawlers/crawler_tjce_1/crawler_tjce_1.service';
import { ApiController } from './api/controllers/api.controller';
import { ApiService } from './api/services/api.service';
import { ApiModule } from './api/modules/api.module';
import { CrawlerTjce2Service } from './crawlers/crawler_tjce_2/crawler_tjce_2.service';
import { CrawlerTjce2Controller } from './crawlers/crawler_tjce_2/crawler_tjce_2.controller';
import { CrawlerTjce2Module } from './crawlers/crawler_tjce_2/crawler_tjce_2.module';



@Module({
  imports: [CrawlerTjal1Module, CrawlerTjal2Module, CrawlerTjce1Module, CrawlerTjce2Module, ApiModule],
  controllers: [AppController, CrawlerTjal1Controller, CrawlerTjal2Controller, CrawlerTjce1Controller, CrawlerTjce2Controller,ApiController],
  providers: [AppService, CrawlerTjal1Service, CrawlerTjal2Service, CrawlerTjce1Service, CrawlerTjce2Service,ApiService],
})
export class AppModule {}
