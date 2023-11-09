import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { CrawlerTjalController } from './crawler_tjal.controller';
import { CrawlerTjalModule } from '../module/crawler_tjal.module';
import { FirstInstanceALModule } from '../utils/firstInstance.module';
import { SecondInstanceALModule } from '../utils/secondInstance.module';
import { FirstInstanceAL } from '../utils/firstInstance';
import { SecondInstanceAL } from '../utils/secondInstance';
import { CrawlerTjalService } from '../service/crawler_tjal.service';
import * as path from 'path';
import * as fs from 'fs';

describe('CrawlerTjalController', () => {
  let controller: CrawlerTjalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CrawlerTjalModule,
        FirstInstanceALModule,
        SecondInstanceALModule,
      ],
      controllers: [CrawlerTjalController],
      providers: [CrawlerTjalService, FirstInstanceAL, SecondInstanceAL],
    }).compile();

    controller = module.get<CrawlerTjalController>(CrawlerTjalController);
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
        'resultAl.json',
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
