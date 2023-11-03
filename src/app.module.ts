import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerTjal1Service } from './crawler_tjal_1/crawler_tjal_1.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CrawlerTjal1Service],
})
export class AppModule {}
