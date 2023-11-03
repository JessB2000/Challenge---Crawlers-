import { Module } from '@nestjs/common';
import { CrawlerTjal1Controller } from 'src/crawlers/crawler_tjal_1/crawler_tjal_1.controller';
import { CrawlerTjal2Controller } from 'src/crawlers/crawler_tjal_2/crawler_tjal_2.controller';
import { CrawlerTjce1Controller } from 'src/crawlers/crawler_tjce_1/crawler_tjce_1.controller';
import { CrawlerTjce2Controller } from 'src/crawlers/crawler_tjce_2/crawler_tjce_2.controller';
import { CrawlerTjal1Module } from 'src/crawlers/crawler_tjal_1/crawler_tjal_1.module';
import { CrawlerTjal2Module } from 'src/crawlers/crawler_tjal_2/crawler_tjal_2.module';
import { CrawlerTjce2Module } from 'src/crawlers/crawler_tjce_2/crawler_tjce_2.module';
import { CrawlerTjal1Service } from 'src/crawlers/crawler_tjal_1/crawler_tjal_1.service';
import { CrawlerTjal2Service } from 'src/crawlers/crawler_tjal_2/crawler_tjal_2.service';
import { CrawlerTjce1Service } from 'src/crawlers/crawler_tjce_1/crawler_tjce_1.service';
import { CrawlerTjce2Service } from 'src/crawlers/crawler_tjce_2/crawler_tjce_2.service';
import { CrawlerTjce1Module } from 'src/crawlers/crawler_tjce_1/crawler_tjce_1.module';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';

@Module({
    imports:[CrawlerTjal1Module, CrawlerTjal2Module, CrawlerTjce1Module, CrawlerTjce2Module], 
    controllers:[ApiController, CrawlerTjal1Controller, CrawlerTjal2Controller, CrawlerTjce1Controller, CrawlerTjce2Controller],
    providers: [ApiService, CrawlerTjal1Service, CrawlerTjal2Service, CrawlerTjce1Service, CrawlerTjce2Service]
})
export class ApiModule {}

