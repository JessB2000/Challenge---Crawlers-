import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjceController } from './crawler_tjce.controller';
import { CrawlerTjceService } from '../service/crawler_tjce.service';
import { CrawlerTjceModule } from '../module/crawler_tjce.module';
import { FirstInstanceCEModule } from '../utils/firstInstance.module';
import { SecondInstanceCEModule } from '../utils/secondInstance.module';
import { FirstInstanceCE } from '../utils/fistInstance';
import { SecondInstanceCE } from '../utils/secondInstance';
import { NotFoundException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

describe('CrawlerTjceController', () => {
  let controller: CrawlerTjceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CrawlerTjceModule,
        FirstInstanceCEModule,
        SecondInstanceCEModule,
      ],
      controllers: [CrawlerTjceController],
      providers: [CrawlerTjceService, FirstInstanceCE, SecondInstanceCE],
    }).compile();
    controller = module.get<CrawlerTjceController>(CrawlerTjceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getProcessDetails', () => {
    it('should return process details', async () => {
      const processNumber = '0710802-55.2018.8.02.0001';
      const caminhoArquivo = path.join(
        __dirname,
        '..',
        '..',
        '..',
        'results',
        'resultCe.json',
      );
      const dadosEsperados = JSON.parse(
        fs.readFileSync(caminhoArquivo, 'utf-8'),
      );
      const result = await controller.getProcessDetails(processNumber);
      expect(result).toEqual(dadosEsperados);
    }, 60000);

    it('should throw NotFoundException if process not found', async () => {
      const processNumber = '0070337-91.2008.8.06.0001';
      try {
        await controller.getProcessDetails(processNumber);
        fail('NotFoundException was not thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual(
          `Processo com número ${processNumber} não encontrado`,
        );
      }
    }, 60000);
  });
});
