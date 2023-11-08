import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/service/crawler_tjce.service';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/service/crawler_tjal.service';
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
  let crawlerTjalService: CrawlerTjalService;
  let crawlerTjceService: CrawlerTjceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        FirstInstanceALModule,
        SecondInstanceALModule,
        FirstInstanceCEModule,
        SecondInstanceCEModule,
      ],
      providers: [
        ApiService,
        CrawlerTjalService,
        CrawlerTjceService,
        FirstInstanceCE,
        SecondInstanceCE,
        FirstInstanceAL,
        SecondInstanceAL,
      ],
    }).compile();

    service = module.get<ApiService>(ApiService);
    crawlerTjalService = module.get<CrawlerTjalService>(CrawlerTjalService);
    crawlerTjceService = module.get<CrawlerTjceService>(CrawlerTjceService);
  });
 
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe ('getProcessos', () => {
  it('should call getDataInstances from CrawlerTjalService when valor is "8.02"', async () => {
    const numeroProcesso = 'XXXXXXXXXXXXXXX8.02XXXX';
    const mockData = {
       "primeiraInstancia":{ 
        "numero": expect.any(String),
        "classe": expect.any(String),
        "area": expect.any(String),
        "dataDistribuicao": expect.any(String),
        "valorAcao": expect.any(String),
        "partesProcesso": expect.any(Array),
        "movimentacoesLista": expect.any(Array),
    }, 
    "segundaInstancia":{ 
      "numero": expect.any(String),
      "classe": expect.any(String),
      "area": expect.any(String),
      "dataDistribuicao": expect.any(String),
      "valorAcao": expect.any(String),
      "partesProcesso": expect.any(Array),
      "movimentacoesLista": expect.any(Array),
  }
    }
    jest.spyOn(crawlerTjalService, 'getDataInstances').mockResolvedValue(mockData);
    const result = await service.getProcessos(numeroProcesso);
    expect(result).toBeNull(); 
    expect(result).toEqual(mockData);
  });
});
});
