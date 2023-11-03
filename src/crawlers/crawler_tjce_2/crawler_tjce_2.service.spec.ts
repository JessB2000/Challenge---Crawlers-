import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjce2Service } from './crawler_tjce_2.service';

describe('CrawlerTjce2Service', () => {
  let service: CrawlerTjce2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerTjce2Service],
    }).compile();

    service = module.get<CrawlerTjce2Service>(CrawlerTjce2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
