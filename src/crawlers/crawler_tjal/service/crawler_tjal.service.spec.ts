import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjalService } from './crawler_tjal.service';
import * as fs from 'fs';
import * as path from 'path';
import { FirstInstanceAL } from '../utils/firstInstance';
import { SecondInstanceAL } from '../utils/secondInstance';

describe('CrawlerTjalService', () => {
  let service: CrawlerTjalService;
  let mockFirstInstanceAL: any;
  let mockSecondInstanceAL: any;

  beforeEach(async () => {
    mockFirstInstanceAL = {
      initializeBrowser: jest.fn(),
      closeBrowser: jest.fn(),
      getDataTJALPrimeiraInstancia: jest.fn(),
    };

    mockSecondInstanceAL = {
      initializeBrowser: jest.fn(),
      closeBrowser: jest.fn(),
      getDataTJALSegundaInstancia: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrawlerTjalService,
        { provide: FirstInstanceAL, useValue: mockFirstInstanceAL },
        { provide: SecondInstanceAL, useValue: mockSecondInstanceAL },
      ],
    }).compile();

    service = module.get<CrawlerTjalService>(CrawlerTjalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call methods on FirstInstanceAL and SecondInstanceAL', async () => {
    const processNumber = '0710802-55.2018.8.02.0001';
    const urlP = 'https://www2.tjal.jus.br/cpopg/open.do';
    const urlS = 'https://www2.tjal.jus.br/cpopg5/open.do';
    const caminhoArquivoPrimeira = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'results',
      'primeiraInstancia',
      'primeiraAL.json',
    );
    const dadosEsperadosPrimeira = JSON.parse(
      fs.readFileSync(caminhoArquivoPrimeira, 'utf-8'),
    );
    const caminhoArquivoSegunda = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'results',
      'segundaInstancia',
      'segundaAL.json',
    );
    const dadosEsperadosSegunda = JSON.parse(
      fs.readFileSync(caminhoArquivoSegunda, 'utf-8'),
    );

    mockFirstInstanceAL.getDataTJALPrimeiraInstancia.mockResolvedValue(
      dadosEsperadosPrimeira,
    );
    mockSecondInstanceAL.getDataTJALSegundaInstancia.mockResolvedValue(
      dadosEsperadosSegunda,
    );

    const result = await service.getDataInstances(processNumber);
    expect(result).toEqual({
      primeiraInstancia: dadosEsperadosPrimeira,
      segundaInstancia: dadosEsperadosSegunda,
    });

    expect(
      mockFirstInstanceAL.getDataTJALPrimeiraInstancia,
    ).toHaveBeenCalledWith(urlP, processNumber);
    expect(
      mockSecondInstanceAL.getDataTJALSegundaInstancia,
    ).toHaveBeenCalledWith(urlS, processNumber);
  });

  it('should handle null responses', async () => {
    const processNumber = '0710802-55.2018.8.06.0001';

    mockFirstInstanceAL.getDataTJALPrimeiraInstancia.mockResolvedValue(null);
    mockSecondInstanceAL.getDataTJALSegundaInstancia.mockResolvedValue(null);

    const result = await service.getDataInstances(processNumber);
    expect(result).toEqual({
      primeiraInstancia: null,
      segundaInstancia: null,
    });
  });
});
