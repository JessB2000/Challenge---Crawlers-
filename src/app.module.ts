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


@Module({
  imports: [CrawlerTjal1Module, CrawlerTjal2Module, CrawlerTjce1Module],
  controllers: [AppController, CrawlerTjal1Controller, CrawlerTjal2Controller, CrawlerTjce1Controller],
  providers: [AppService, CrawlerTjal1Service, CrawlerTjal2Service, CrawlerTjce1Service],
})
export class AppModule {}
