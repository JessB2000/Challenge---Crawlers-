import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjceController } from './crawler_tjce.controller';
import { CrawlerTjceService } from './crawler_tjce.service';
import { CrawlerTjceModule } from './crawler_tjce.module';
import { FirstInstanceCEModule } from './utils/firstInstance.module';
import { SecondInstanceCEModule } from './utils/secondInstance.module';
import { FirstInstanceCE } from './utils/fistInstance';
import { SecondInstanceCE } from './utils/secondInstance';

describe('CrawlerTjceController', () => {
  let controller: CrawlerTjceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjceModule, FirstInstanceCEModule, SecondInstanceCEModule],
      controllers: [CrawlerTjceController],
      providers: [CrawlerTjceService, FirstInstanceCE, SecondInstanceCE],
    }).compile();

    controller = module.get<CrawlerTjceController>(CrawlerTjceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
