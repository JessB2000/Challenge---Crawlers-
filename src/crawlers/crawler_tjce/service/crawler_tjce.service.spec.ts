import { Test, TestingModule } from '@nestjs/testing';
import * as fs from 'fs';
import * as path from 'path';
import { FirstInstanceCE } from '../utils/fistInstance';
import { SecondInstanceCE } from '../utils/secondInstance';
import { CrawlerTjceService } from './crawler_tjce.service';

describe('CrawlerTjceService', () => {
  let service: CrawlerTjceService;
  let mockFirstInstanceCE: any;
  let mockSecondInstanceCE: any;

  beforeEach(async () => {
    mockFirstInstanceCE = {
      initializeBrowser: jest.fn(),
      closeBrowser: jest.fn(),
      getDataTJCEPrimeiraInstancia: jest.fn(),
    };

    mockSecondInstanceCE = {
      initializeBrowser: jest.fn(),
      closeBrowser: jest.fn(),
      getDataTJCESegundaInstancia: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrawlerTjceService,
        { provide: FirstInstanceCE, useValue: mockFirstInstanceCE },
        { provide: SecondInstanceCE, useValue: mockSecondInstanceCE },
      ],
    }).compile();

    service = module.get<CrawlerTjceService>(CrawlerTjceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call methods on FirstInstanceCE and SecondInstanceCE', async () => {
    const processNumber = '0070337-91.2008.8.06.0001';
    const urlP = 'https://esaj.tjce.jus.br/cpopg/open.do';
    const urlS = 'https://esaj.tjce.jus.br/cpopg5/open.do';
    const caminhoArquivoPrimeira = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'results',
      'primeiraInstancia',
      'primeiraCE.json',
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
      'segundaCE.json',
    );
    const dadosEsperadosSegunda = JSON.parse(
      fs.readFileSync(caminhoArquivoSegunda, 'utf-8'),
    );

    mockFirstInstanceCE.getDataTJCEPrimeiraInstancia.mockResolvedValue(
      dadosEsperadosPrimeira,
    );
    mockSecondInstanceCE.getDataTJCESegundaInstancia.mockResolvedValue(
      dadosEsperadosSegunda,
    );

    const result = await service.getDataInstances(processNumber);
    expect(result).toEqual({
      primeiraInstancia: dadosEsperadosPrimeira,
      segundaInstancia: dadosEsperadosSegunda,
    });

    expect(
      mockFirstInstanceCE.getDataTJCEPrimeiraInstancia,
    ).toHaveBeenCalledWith(urlP, processNumber);
    expect(
      mockSecondInstanceCE.getDataTJCESegundaInstancia,
    ).toHaveBeenCalledWith(urlS, processNumber);
  });

  it('should handle null responses', async () => {
    const processNumber = '0710808-55.2018.8.02.0001';

    mockFirstInstanceCE.getDataTJCEPrimeiraInstancia.mockResolvedValue(null);
    mockSecondInstanceCE.getDataTJCESegundaInstancia.mockResolvedValue(null);

    const result = await service.getDataInstances(processNumber);
    expect(result).toEqual({
      primeiraInstancia: null,
      segundaInstancia: null,
    });
  });
});
