import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjce2Controller } from './crawler_tjce_2.controller';
import { CrawlerTjce2Module } from './crawler_tjce_2.module';
import { CrawlerTjce2Service } from './crawler_tjce_2.service';

describe('CrawlerTjce2Controller', () => {
  let controller: CrawlerTjce2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjce2Module], 
      controllers: [CrawlerTjce2Controller],
      providers: [CrawlerTjce2Service]
    }).compile();

    controller = module.get<CrawlerTjce2Controller>(CrawlerTjce2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
