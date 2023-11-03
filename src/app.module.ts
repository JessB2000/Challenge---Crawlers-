import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerTjal1Service } from './crawlers/crawler_tjal_1/crawler_tjal_1.service';
import { CrawlerTjal1Controller } from './crawlers/crawler_tjal_1/crawler_tjal_1.controller';
import { CrawlerTjal1Module } from './crawlers/crawler_tjal_1/crawler_tjal_1.module';


@Module({
  imports: [CrawlerTjal1Module],
  controllers: [AppController, CrawlerTjal1Controller],
  providers: [AppService, CrawlerTjal1Service],
})
export class AppModule {}
