import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjal1Controller } from './crawler_tjal.controller';
import { CrawlerTjal1Module } from './crawler_tjal.module';
import { CrawlerTjalService } from './crawler_tjal.service';

describe('CrawlerTjal1Controller', () => {
  let controller: CrawlerTjal1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjal1Module],
      controllers: [CrawlerTjal1Controller],
      providers: [CrawlerTjalService],
    }).compile();

    controller = module.get<CrawlerTjal1Controller>(CrawlerTjal1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
