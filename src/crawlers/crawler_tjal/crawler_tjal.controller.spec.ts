import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjalController } from './crawler_tjal.controller';
import { CrawlerTjalModule } from './crawler_tjal.module';
import { CrawlerTjalService } from './crawler_tjal.service';

describe('CrawlerTjalController', () => {
  let controller: CrawlerTjalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjalModule],
      controllers: [CrawlerTjalController],
      providers: [CrawlerTjalService],
    }).compile();

    controller = module.get<CrawlerTjalController>(CrawlerTjalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
