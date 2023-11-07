import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjalService } from './crawler_tjal.service';
import { FirstInstanceALModule } from './utils/firstInstance.module';
import { SecondInstanceALModule } from './utils/secondInstance.module';
import { FirstInstanceAL } from './utils/firstInstance';
import { SecondInstanceAL } from './utils/secondInstance';

describe('CrawlerTjal1Service', () => {
  let service: CrawlerTjalService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FirstInstanceALModule, SecondInstanceALModule],
      providers: [CrawlerTjalService, FirstInstanceAL, SecondInstanceAL],
    }).compile();

    service = module.get<CrawlerTjalService>(CrawlerTjalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should call methods on FirstInstanceAL and SecondInstanceAL', async () => {
    const processNumber = '0710802-55.2018.8.02.0001';
    const result = await service.getDataInstances(processNumber);
    expect(result).toBeDefined(); 
  });
});
