import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjal1Controller } from './crawler_tjal_1.controller';
import { CrawlerTjal1Module } from './crawler_tjal_1.module';
import { CrawlerTjal1Service } from './crawler_tjal_1.service';


describe('CrawlerTjal1Controller', () => {
  let controller: CrawlerTjal1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjal1Module],
      controllers: [CrawlerTjal1Controller],
      providers: [CrawlerTjal1Service]
    }).compile();

    controller = module.get<CrawlerTjal1Controller>(CrawlerTjal1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});