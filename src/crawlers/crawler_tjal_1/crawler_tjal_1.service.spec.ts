import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjal1Service } from './crawler_tjal_1.service';

describe('CrawlerTjal1Service', () => {
  let service: CrawlerTjal1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerTjal1Service],
    }).compile();

    service = module.get<CrawlerTjal1Service>(CrawlerTjal1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
