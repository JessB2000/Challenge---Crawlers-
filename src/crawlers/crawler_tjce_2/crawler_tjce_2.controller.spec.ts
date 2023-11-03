import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjce2Controller } from './crawler_tjce_2.controller';

describe('CrawlerTjce2Controller', () => {
  let controller: CrawlerTjce2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrawlerTjce2Controller],
    }).compile();

    controller = module.get<CrawlerTjce2Controller>(CrawlerTjce2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
