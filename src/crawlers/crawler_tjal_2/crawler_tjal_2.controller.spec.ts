import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjal2Controller } from './crawler_tjal_2.controller';

describe('CrawlerTjal2Controller', () => {
  let controller: CrawlerTjal2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrawlerTjal2Controller],
    }).compile();

    controller = module.get<CrawlerTjal2Controller>(CrawlerTjal2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
