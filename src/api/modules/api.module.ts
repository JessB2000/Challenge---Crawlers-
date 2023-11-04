import { Module } from '@nestjs/common';
import { CrawlerTjce1Controller } from 'src/crawlers/crawler_tjce/crawler_tjce_1.controller';
import { CrawlerTjalService } from 'src/crawlers/crawler_tjal/crawler_tjal.service';
import { CrawlerTjce1Service } from 'src/crawlers/crawler_tjce/crawler_tjce_1.service';
import { CrawlerTjce1Module } from 'src/crawlers/crawler_tjce/crawler_tjce_1.module';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';
import { FirstInstance } from 'src/crawlers/crawler_tjal/utils/firstInstance';
import { FirstInstanceModule } from 'src/crawlers/crawler_tjal/utils/firstInstance.module';
import { SecondInstance } from 'src/crawlers/crawler_tjal/utils/secondInstance';
import { SecondInstanceModule } from 'src/crawlers/crawler_tjal/utils/secondInstance.module';

@Module({
  imports: [CrawlerTjce1Module, FirstInstanceModule, SecondInstanceModule],
  controllers: [ApiController, CrawlerTjce1Controller],
  providers: [
    ApiService,
    CrawlerTjalService,
    CrawlerTjce1Service,
    FirstInstance,
    SecondInstance,
  ],
})
export class ApiModule {}
