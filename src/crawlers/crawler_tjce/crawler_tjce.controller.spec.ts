import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjceController } from './crawler_tjce.controller';
import { CrawlerTjceService } from './crawler_tjce.service';
import { CrawlerTjceModule } from './crawler_tjce.module';

describe('CrawlerTjceController', () => {
  let controller: CrawlerTjceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjceModule],
      controllers: [CrawlerTjceController],
      providers: [CrawlerTjceService],
    }).compile();

    controller = module.get<CrawlerTjceController>(CrawlerTjceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
