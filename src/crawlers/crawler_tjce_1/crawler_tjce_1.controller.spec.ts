import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjce1Controller } from './crawler_tjce_1.controller';

describe('CrawlerTjce1Controller', () => {
  let controller: CrawlerTjce1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrawlerTjce1Controller],
    }).compile();

    controller = module.get<CrawlerTjce1Controller>(CrawlerTjce1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
