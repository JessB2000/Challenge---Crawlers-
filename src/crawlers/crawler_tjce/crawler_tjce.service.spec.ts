import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjceService } from './crawler_tjce.service';

describe('CrawlerTjceService', () => {
  let service: CrawlerTjceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerTjceService],
    }).compile();

    service = module.get<CrawlerTjceService>(CrawlerTjceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
