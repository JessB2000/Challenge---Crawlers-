import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjceService } from './crawler_tjce.service';
import { FirstInstanceCEModule } from '../utils/firstInstance.module';
import { SecondInstanceCEModule } from '../utils/secondInstance.module';
import { FirstInstanceCE } from '../utils/fistInstance';
import { SecondInstanceCE } from '../utils/secondInstance';

describe('CrawlerTjceService', () => {
  let service: CrawlerTjceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FirstInstanceCEModule, SecondInstanceCEModule],
      providers: [CrawlerTjceService, FirstInstanceCE, SecondInstanceCE],
    }).compile();

    service = module.get<CrawlerTjceService>(CrawlerTjceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
