import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjce1Service } from './crawler_tjce_1.service';

describe('CrawlerTjce1Service', () => {
  let service: CrawlerTjce1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerTjce1Service],
    }).compile();

    service = module.get<CrawlerTjce1Service>(CrawlerTjce1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
