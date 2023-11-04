import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjce1Controller } from './crawler_tjce_1.controller';
import { CrawlerTjce1Service } from './crawler_tjce_1.service';
import { CrawlerTjce1Module } from './crawler_tjce_1.module';

describe('CrawlerTjce1Controller', () => {
  let controller: CrawlerTjce1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjce1Module],
      controllers: [CrawlerTjce1Controller],
      providers: [CrawlerTjce1Service]
    }).compile();

    controller = module.get<CrawlerTjce1Controller>(CrawlerTjce1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
