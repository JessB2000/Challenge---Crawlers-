import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/crawler_tjce.service';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/crawler_tjal.service';
import { FirstInstanceAL } from '../../crawlers/crawler_tjal/utils/firstInstance';
import { FirstInstanceALModule } from '../../crawlers/crawler_tjal/utils/firstInstance.module';
import { SecondInstanceALModule } from '../../crawlers/crawler_tjal/utils/secondInstance.module';
import { FirstInstanceCEModule } from '../../crawlers/crawler_tjce/utils/firstInstance.module';
import { SecondInstanceCEModule } from '../../crawlers/crawler_tjce/utils/secondInstance.module';
import { FirstInstanceCE } from '../../crawlers/crawler_tjce/utils/fistInstance';
import { SecondInstanceCE } from '../../crawlers/crawler_tjce/utils/secondInstance';
import { SecondInstanceAL } from '../../crawlers/crawler_tjal/utils/secondInstance';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FirstInstanceALModule, SecondInstanceALModule, FirstInstanceCEModule, SecondInstanceCEModule],
      providers: [ApiService, CrawlerTjalService,CrawlerTjceService, FirstInstanceCE, SecondInstanceCE, FirstInstanceAL, SecondInstanceAL],
    }).compile();

    service = module.get<ApiService>(ApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should call getDataInstances from CrawlerTjalService when valor is "8.02"', async () => {
    // Arrange
    const numeroProcesso = 'xxxxxx8.02xxxxxx';
    const expectedResult = 'some data';
    crawlerTjalService.getDataInstances.mockResolvedValue(expectedResult);

    // Act
    const result = await apiService.getProcessos(numeroProcesso);

    // Assert
    expect(result).toBe(expectedResult);
    expect(crawlerTjalService.getDataInstances).toHaveBeenCalledWith(numeroProcesso);
  });
});
