import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerTjalService } from './crawlers/crawler_tjal/crawler_tjal.service';
import { ApiController } from './api/controllers/api.controller';
import { ApiService } from './api/services/api.service';
import { ApiModule } from './api/modules/api.module';
import { FirstInstanceAL } from './crawlers/crawler_tjal/utils/firstInstance';
import { SecondInstanceAL } from './crawlers/crawler_tjal/utils/secondInstance';
import { CrawlerTjalModule } from './crawlers/crawler_tjal/crawler_tjal.module';
import { CrawlerTjalController } from './crawlers/crawler_tjal/crawler_tjal.controller';
import { CrawlerTjceController } from './crawlers/crawler_tjce/crawler_tjce.controller';
import { CrawlerTjceService } from './crawlers/crawler_tjce/crawler_tjce.service';
import { CrawlerTjceModule } from './crawlers/crawler_tjce/crawler_tjce.module';
import { FirstInstanceCE } from './crawlers/crawler_tjce/utils/fistInstance';
import { SecondInstanceCE } from './crawlers/crawler_tjce/utils/secondInstance';

@Module({
  imports: [CrawlerTjalModule, CrawlerTjceModule, ApiModule],
  controllers: [
    AppController,
    CrawlerTjalController,
    CrawlerTjceController,
    ApiController,
  ],
  providers: [
    AppService,
    CrawlerTjalService,
    CrawlerTjceService,
    FirstInstanceAL,
    SecondInstanceAL,
    FirstInstanceCE,
    SecondInstanceCE,
    ApiService,
  ],
})
export class AppModule {}
