import { Module } from '@nestjs/common';
import { CrawlerTjalController } from './crawler_tjal.controller';
import { CrawlerTjalService } from './crawler_tjal.service';
import { FirstInstanceAL } from './utils/firstInstance';
import { SecondInstanceAL } from './utils/secondInstance';
import { FirstInstanceALModule } from './utils/firstInstance.module';
import { SecondInstanceALModule } from './utils/secondInstance.module';

@Module({
  imports: [FirstInstanceALModule, SecondInstanceALModule],
  controllers: [CrawlerTjalController],
  providers: [CrawlerTjalService, FirstInstanceAL, SecondInstanceAL],
})
export class CrawlerTjalModule {}
