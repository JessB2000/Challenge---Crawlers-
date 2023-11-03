import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjal2Controller } from './crawler_tjal_2.controller';
import { CrawlerTjal2Module } from './crawler_tjal_2.module';
import { CrawlerTjal2Service } from './crawler_tjal_2.service';

describe('CrawlerTjal2Controller', () => {
  let controller: CrawlerTjal2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjal2Module],
      controllers: [CrawlerTjal2Controller],
      providers: [CrawlerTjal2Service]
    }).compile();

    controller = module.get<CrawlerTjal2Controller>(CrawlerTjal2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
