import { Module } from '@nestjs/common';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/service/crawler_tjal.service';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';
import { FirstInstanceAL } from '../../crawlers/crawler_tjal/utils/firstInstance';
import { FirstInstanceALModule } from '../../crawlers/crawler_tjal/utils/firstInstance.module';
import { SecondInstanceAL } from '../../crawlers/crawler_tjal/utils/secondInstance';
import { SecondInstanceALModule } from '../../crawlers/crawler_tjal/utils/secondInstance.module';
import { CrawlerTjalController } from '../../crawlers/crawler_tjal/controller/crawler_tjal.controller';
import { CrawlerTjalModule } from '../../crawlers/crawler_tjal/module/crawler_tjal.module';
import { CrawlerTjceModule } from '../../crawlers/crawler_tjce/module/crawler_tjce.module';
import { CrawlerTjceController } from '../../crawlers/crawler_tjce/controller/crawler_tjce.controller';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/service/crawler_tjce.service';
import { FirstInstanceCEModule } from '../../crawlers/crawler_tjce/utils/firstInstance.module';
import { FirstInstanceCE } from '../../crawlers/crawler_tjce/utils/fistInstance';
import { SecondInstanceCE } from '../../crawlers/crawler_tjce/utils/secondInstance';
import { SecondInstanceCEModule } from '../../crawlers/crawler_tjce/utils/secondInstance.module';

@Module({
  imports: [
    CrawlerTjalModule,
    CrawlerTjceModule,
    FirstInstanceALModule,
    SecondInstanceALModule,
    FirstInstanceCEModule,
    FirstInstanceCEModule,
    SecondInstanceCEModule,
  ],
  controllers: [ApiController, CrawlerTjalController, CrawlerTjceController],
  providers: [
    ApiService,
    CrawlerTjalService,
    CrawlerTjceService,
    FirstInstanceAL,
    SecondInstanceAL,
    FirstInstanceCE,
    SecondInstanceCE,
  ],
})
export class ApiModule {}
