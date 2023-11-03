import { Injectable } from '@nestjs/common';
import axios from 'axios';
import cheerio from 'cheerio';

@Injectable()
export class CrawlerTjce1Service {
    async getProcessOne(processNumber: string) {
        try {
          const response = await axios.get(
            `https://esaj.tjce.jus.br/cpopg/show.do?processo.numero=${processNumber}`,
          );
          const $ = cheerio.load(response.data);
    
          const numero = $('#numeroProcesso').text().replace(/\n|\t|\r/g, '')
            .replace(/\s{2,}/g, ' ');
          const classe = $('#classeProcesso').text().replace(/\n|\t|\r/g, '')
            .replace(/\s{2,}/g, ' ');
          const area = $('#areaProcesso').text().replace(/\n|\t|\r/g, '')
            .replace(/\s{2,}/g, ' ');
          const dataDistribuicao = $('#dataHoraDistribuicaoProcesso')
            .text()
            .slice(0, 9).replace(/\n|\t|\r/g, '')
            .replace(/\s{2,}/g, ' ');
          const valorAcao = $('#valorAcaoProcesso').text().replace(/\n|\t|\r/g, '')
            .replace(/\s{2,}/g, ' ');
          const partesProcesso: {
            pessoa: string;
            envolvidos: string;
          }[] = [];
          const movimentacoesLista: { data: string; movimento: string }[] = [];
    
          $('#tableTodasPartes tr').each((index, element) => {
            const pessoa = $(element)
              .find('td:nth-child(1)')
              .text()
              .replace(/\n|\t|\r/g, '')
              .replace(/\s{2,}/g, ' ');
            const envolvidos = $(element)
              .find('td:nth-child(2)')
              .text()
              .replace(/\n|\t|\r/g, '')
              .replace(/\s{2,}/g, ' ');
            partesProcesso.push({ pessoa, envolvidos });
          });
    
          $('#tabelaUltimasMovimentacoes tr').each((index, element) => {
            const data = $(element)
              .find('td:nth-child(1)')
              .text()
              .replace(/\n|\t|\r/g, '')
              .replace(/\s{2,}/g, ' ');
            const movimento = $(element)
              .find('td:nth-child(3)')
              .text()
              .replace(/\n|\t|\r/g, '')
              .replace(/\s{2,}/g, ' ');
            movimentacoesLista.push({ data, movimento });
          });
    
          return {
            numero,
            classe,
            area,
            dataDistribuicao,
            valorAcao,
            partesProcesso,
            movimentacoesLista,
          };
        } catch (error) {
          console.error('Erro ao obter detalhes do processo', error);
          return null;
        }
      }
}
