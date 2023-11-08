import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from '../services/api.service';
import * as path from 'path'
import * as fs from 'fs'
import { CrawlerTjalController } from '../../crawlers/crawler_tjal/controller/crawler_tjal.controller';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/service/crawler_tjal.service';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/service/crawler_tjce.service';
import { CrawlerTjceController } from '../../crawlers/crawler_tjce/controller/crawler_tjce.controller';
import { ApiModule } from '../modules/api.module';
import { CrawlerTjalModule } from '../../crawlers/crawler_tjal/module/crawler_tjal.module';
import { CrawlerTjceModule } from '../../crawlers/crawler_tjce/module/crawler_tjce.module';


describe('ApiController', () => {
  let apiController: ApiController;
  let apiService: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ApiModule, CrawlerTjalModule, CrawlerTjceModule],
      controllers: [ApiController, CrawlerTjalController, CrawlerTjceController],
      providers: [ApiService, CrawlerTjalService, CrawlerTjceService],
    }).compile();

    apiController = module.get<ApiController>(ApiController);
    apiService = module.get<ApiService>(ApiService);
  });

  describe('addProcesso', () => {
    it('should return the process when a valid process number is provided', async () => {
    const numero = '0710802-55.2018.8.02.0001'
    const caminhoArquivo = path.join(__dirname, '..', '..','results', 'resultAl.json'); 
    const dadosEsperados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8')); 
    
      jest.spyOn(apiService, 'getProcessos').mockResolvedValue(dadosEsperados);

      const result = await apiController.addProcesso({ numeroProcesso: numero });

      expect(result).toEqual(dadosEsperados);
    });

    it('should throw NotFoundException when the process number is not found', async () => {
      jest.spyOn(apiService, 'getProcessos').mockResolvedValue(null);

      try {
        await apiController.addProcesso({ numeroProcesso: 'nonExistentProcessNumber' });
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toBe('Processo com número nonExistentProcessNumber não encontrado');
      }
    });
  });

  describe('getInfoProcesso', () => {
    it('should return the process when a valid process number is provided', async () => {
        const numeroProcesso = '0070337-91.2008.8.06.0001';
        const caminhoArquivo = path.join(__dirname, '..', '..','results', 'resultCe.json'); 
        const dadosEsperados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8')); 

      jest.spyOn(apiService, 'getProcessos').mockResolvedValue(dadosEsperados);

      const result = await apiController.getInfoProcesso(numeroProcesso);

      expect(result).toEqual(dadosEsperados);
    });

    it('should throw NotFoundException when the process number is not found', async () => {
      jest.spyOn(apiService, 'getProcessos').mockResolvedValue(null);

      try {
        await apiController.getInfoProcesso('nonExistentProcessNumber');
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toBe('Processo com número nonExistentProcessNumber não encontrado');
      }
    });
  });
});

