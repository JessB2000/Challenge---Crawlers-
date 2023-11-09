import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/service/crawler_tjal.service';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';
import { FirstInstanceAL } from '../../crawlers/crawler_tjal/utils/firstInstance';
import { FirstInstanceALModule } from '../../crawlers/crawler_tjal/utils/firstInstance.module';
import { SecondInstanceAL } from '../../crawlers/crawler_tjal/utils/secondInstance';
import { SecondInstanceALModule } from '../../crawlers/crawler_tjal/utils/secondInstance.module';
import { CrawlerTjalController } from '../../crawlers/crawler_tjal/controller/crawler_tjal.controller';
import { CrawlerTjalModule } from '../../crawlers/crawler_tjal/module/crawler_tjal.module';
import { CrawlerTjceModule } from '../../crawlers/crawler_tjce/module/crawler_tjce.module';
import { CrawlerTjceController } from '../../crawlers/crawler_tjce/controller/crawler_tjce.controller';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/service/crawler_tjce.service';
import { FirstInstanceCEModule } from '../../crawlers/crawler_tjce/utils/firstInstance.module';
import { FirstInstanceCE } from '../../crawlers/crawler_tjce/utils/fistInstance';
import { SecondInstanceCE } from '../../crawlers/crawler_tjce/utils/secondInstance';
import { SecondInstanceCEModule } from '../../crawlers/crawler_tjce/utils/secondInstance.module';
import { ApiModule } from '../modules/api.module';

describe('ApiController', () => {
  let apiController: ApiController;
  let apiService: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ApiModule,
        CrawlerTjalModule,
        CrawlerTjceModule,
        FirstInstanceALModule,
        SecondInstanceALModule,
        FirstInstanceCEModule,
        FirstInstanceCEModule,
        SecondInstanceCEModule,
      ],
      controllers: [
        ApiController,
        CrawlerTjalController,
        CrawlerTjceController,
      ],
      providers: [
        ApiService,
        CrawlerTjalService,
        CrawlerTjceService,
        FirstInstanceAL,
        SecondInstanceAL,
        FirstInstanceCE,
        SecondInstanceCE,
      ],
    }).compile();

    apiController = module.get<ApiController>(ApiController);
    apiService = module.get<ApiService>(ApiService);
  });

  describe('addProcesso', () => {
    it('should return the process when a valid process number is provided', async () => {
      const numero = '0710802-55.2018.8.02.0001';
      const caminhoArquivo = path.join(
        __dirname,
        '..',
        '..',
        'results',
        'resultAl.json',
      );
      const dadosEsperados = JSON.parse(
        fs.readFileSync(caminhoArquivo, 'utf-8'),
      );

      jest.spyOn(apiService, 'getProcessos').mockResolvedValue(dadosEsperados);

      const result = await apiController.addProcesso({
        numeroProcesso: numero,
      });

      expect(result).toEqual(dadosEsperados);
    });

    it('should throw NotFoundException when the process number is not found', async () => {
      jest.spyOn(apiService, 'getProcessos').mockResolvedValue(null);

      try {
        await apiController.addProcesso({
          numeroProcesso: 'nonExistentProcessNumber',
        });
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toBe('Processo não encontrado');
      }
    });
  });

  describe('getInfoProcesso', () => {
    it('should return the process when a valid process number is provided', async () => {
      const numeroProcesso = '0070337-91.2008.8.06.0001';
      const caminhoArquivo = path.join(
        __dirname,
        '..',
        '..',
        'results',
        'resultCe.json',
      );
      const dadosEsperados = JSON.parse(
        fs.readFileSync(caminhoArquivo, 'utf-8'),
      );

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
        expect(error.message).toBe('Processo não encontrado');
      }
    });
  });
});
