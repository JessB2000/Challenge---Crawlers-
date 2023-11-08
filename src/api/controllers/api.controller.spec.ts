import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { CrawlerTjalModule } from '../../crawlers/crawler_tjal/module/crawler_tjal.module';
import { CrawlerTjceModule } from '../../crawlers/crawler_tjce/module/crawler_tjce.module';
import { FirstInstanceALModule } from '../../crawlers/crawler_tjal/utils/firstInstance.module';
import { SecondInstanceALModule } from '../../crawlers/crawler_tjal/utils/secondInstance.module';
import { FirstInstanceCEModule } from '../../crawlers/crawler_tjce/utils/firstInstance.module';
import { SecondInstanceCEModule } from '../../crawlers/crawler_tjce/utils/secondInstance.module';
import { ApiService } from '../services/api.service';
import { CrawlerTjalService } from '../../crawlers/crawler_tjal/service/crawler_tjal.service';
import { CrawlerTjceService } from '../../crawlers/crawler_tjce/service/crawler_tjce.service';


describe('ApiController', () => {
  let controller: ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjalModule, CrawlerTjceModule, FirstInstanceALModule, SecondInstanceALModule, FirstInstanceCEModule, SecondInstanceCEModule],
      controllers: [ApiController],
      providers: [ApiService, CrawlerTjalService, CrawlerTjceService],
    }).compile();

    controller = module.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
