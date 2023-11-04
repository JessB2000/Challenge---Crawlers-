import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjalService } from './crawler_tjal.service';

describe('CrawlerTjal1Service', () => {
  let service: CrawlerTjalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerTjalService],
    }).compile();

    service = module.get<CrawlerTjalService>(CrawlerTjalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
