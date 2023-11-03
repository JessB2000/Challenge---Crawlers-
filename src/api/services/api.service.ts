import { Injectable } from '@nestjs/common';
import { CrawlerTjal1Service } from 'src/crawlers/crawler_tjal_1/crawler_tjal_1.service';
import { CrawlerTjal2Service } from 'src/crawlers/crawler_tjal_2/crawler_tjal_2.service';
import { CrawlerTjce1Service } from 'src/crawlers/crawler_tjce_1/crawler_tjce_1.service';
import { CrawlerTjce2Service } from 'src/crawlers/crawler_tjce_2/crawler_tjce_2.service';

@Injectable()
export class ApiService {
    constructor(private readonly crawlerTjal1Service: CrawlerTjal1Service,
        private readonly crawlerTjal2Service: CrawlerTjal2Service,
        private readonly crawlerTjce1Service: CrawlerTjce1Service,
        private readonly crawlerTjce2Service: CrawlerTjce2Service) {}

    async getProcessos(numeroProcesso: string, tribunal: string, grau: number) {
        try {
            if (tribunal === 'TJAL') {
                if (grau == 1) {
                    return this.crawlerTjal1Service.getProcessOne(numeroProcesso);
                }
                if (grau == 2) {
                    return this.crawlerTjal2Service.getProcessTwo(numeroProcesso);
                }
            }
            if (tribunal == 'TJCE') {
                if (grau == 1) {
                 
                    return this.crawlerTjce1Service.getProcessOne(numeroProcesso);
                }
                if (grau == 2){
                    return this.crawlerTjce2Service.getProcessTwo(numeroProcesso);
                }
            }
        }
        catch (error) {
            console.error('Erro ao obter os detalhes do processo.', error);
            return null; 
        }
    }
}
