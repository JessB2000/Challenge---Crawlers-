import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjalController } from './crawler_tjal.controller';
import { CrawlerTjalModule } from './crawler_tjal.module';
import { CrawlerTjalService } from './crawler_tjal.service';
import { FirstInstanceALModule } from './utils/firstInstance.module';
import { SecondInstanceALModule } from './utils/secondInstance.module';
import { FirstInstanceAL } from './utils/firstInstance';
import { SecondInstanceAL } from './utils/secondInstance';

describe('CrawlerTjalController', () => {
  let controller: CrawlerTjalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjalModule, FirstInstanceALModule, SecondInstanceALModule],
      controllers: [CrawlerTjalController],
      providers: [CrawlerTjalService, FirstInstanceAL, SecondInstanceAL],
    }).compile();

    controller = module.get<CrawlerTjalController>(CrawlerTjalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
