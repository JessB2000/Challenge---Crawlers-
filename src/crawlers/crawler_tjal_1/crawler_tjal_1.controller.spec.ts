import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjal1Controller } from './crawler_tjal_1.controller';

describe('CrawlerTjal1Controller', () => {
  let controller: CrawlerTjal1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrawlerTjal1Controller],
    }).compile();

    controller = module.get<CrawlerTjal1Controller>(CrawlerTjal1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
