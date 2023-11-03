import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjal2Service } from './crawler_tjal_2.service';

describe('CrawlerTjal2Service', () => {
  let service: CrawlerTjal2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerTjal2Service],
    }).compile();

    service = module.get<CrawlerTjal2Service>(CrawlerTjal2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
