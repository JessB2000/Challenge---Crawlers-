import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ApiService } from './api.service';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/service/crawler_tjal.service';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/service/crawler_tjce.service';
import * as path from 'path'
import * as fs from 'fs'
import { CrawlerTjceModule } from '../../crawlers/crawler_tjce/module/crawler_tjce.module';
import { CrawlerTjalModule } from '../../crawlers/crawler_tjal/module/crawler_tjal.module';
import { ApiController } from '../controllers/api.controller';
import { CrawlerTjalController } from '../../crawlers/crawler_tjal/controller/crawler_tjal.controller';
import { CrawlerTjceController } from '../../crawlers/crawler_tjce/controller/crawler_tjce.controller';
import { ApiModule } from '../modules/api.module';


describe('ApiService', () => {
  let service: ApiService;
  let crawlerTjalService: jest.Mocked<CrawlerTjalService>;
  let crawlerTjceService: jest.Mocked<CrawlerTjceService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ ApiModule, 
        CrawlerTjalModule,
        CrawlerTjceModule,
      ],
      controllers: [ApiController, CrawlerTjalController, CrawlerTjceController],
      providers: [
        ApiService,
        {
          provide: CrawlerTjalService,
          useValue: {
            getDataInstances: jest.fn(),
          },
        },
        {
          provide: CrawlerTjceService,
          useValue: {
            getDataInstances: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ApiService>(ApiService);
    crawlerTjalService = module.get<CrawlerTjalService>(CrawlerTjalService) as jest.Mocked<CrawlerTjalService>;
    crawlerTjceService = module.get<CrawlerTjceService>(CrawlerTjceService) as jest.Mocked<CrawlerTjceService>;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get processos from CrawlerTjalService', async () => {
    const numeroProcesso = '0710802-55.2018.8.02.0001';
    const caminhoArquivo = path.join(__dirname, '..', '..','results', 'resultAl.json'); 
    const dadosEsperados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8')); 

    crawlerTjalService.getDataInstances.mockReturnValueOnce(dadosEsperados);

    const result = await service.getProcessos(numeroProcesso);
    expect(result).toEqual(dadosEsperados);
    expect(crawlerTjalService.getDataInstances).toHaveBeenCalledWith(numeroProcesso);
  });

  it('should get processos from CrawlerTjceService', async () => {
    const numeroProcesso = '0070337-91.2008.8.06.0001';
    const caminhoArquivo = path.join(__dirname, '..', '..','results', 'resultCe.json'); 
    const dadosEsperados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8')); 
    

    crawlerTjceService.getDataInstances.mockReturnValueOnce(dadosEsperados);

    const result = await service.getProcessos(numeroProcesso);
    expect(result).toEqual(dadosEsperados);
    expect(crawlerTjceService.getDataInstances).toHaveBeenCalledWith(numeroProcesso);
  });

  it('should throw NotFoundException for invalid process number', async () => {
    const numeroProcesso = '0710802-55.2018.8.15.0001';

    expect.assertions(1);
    try {
      await service.getProcessos(numeroProcesso);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});


