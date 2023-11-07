import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjalController } from './crawler_tjal.controller';
import { CrawlerTjalModule } from './crawler_tjal.module';
import { CrawlerTjalService } from './crawler_tjal.service';
import { FirstInstanceALModule } from './utils/firstInstance.module';
import { SecondInstanceALModule } from './utils/secondInstance.module';
import { FirstInstanceAL } from './utils/firstInstance';
import { SecondInstanceAL } from './utils/secondInstance';
import { NotFoundException } from '@nestjs/common';

describe('CrawlerTjalController', () => {
  let controller: CrawlerTjalController;
  let service: CrawlerTjalService; 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjalModule, FirstInstanceALModule, SecondInstanceALModule],
      controllers: [CrawlerTjalController],
      providers: [CrawlerTjalService, FirstInstanceAL, SecondInstanceAL],
    }).compile();

    service = module.get<CrawlerTjalService>(CrawlerTjalService); 
    controller = module.get<CrawlerTjalController>(CrawlerTjalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('getProcessDetails', () => {
    it('should return process details', async () => {
      const processNumber = '0710802-55.2018.8.02.0001';
      const expectedResult = {"primeiraInstancia": {
        "numero": " 0710802-55.2018.8.02.0001 ",
        "classe": "Procedimento Comum Cível",
        "area": " Cível",
        "dataDistribuicao": "02/05/201",
        "valorAcao": "R$ 281.178,42",
        "partesProcesso": [
            {
                "pessoa": " Autor ",
                "envolvidos": " José Carlos Cerqueira Souza Filho Advogado: Vinicius Faria de Cerqueira "
            },
            {
                "pessoa": " Autora ",
                "envolvidos": " Livia Nascimento da Rocha Advogado: Vinicius Faria de Cerqueira "
            },
            {
                "pessoa": " Ré ",
                "envolvidos": " Cony Engenharia Ltda. Advogado: Carlos Henrique de Mendonça Brandão Advogado: Guilherme Freire Furtado Advogada: Maria Eugênia Barreiros de Mello Advogado: Vítor Reis de Araujo Carvalho "
            },
            {
                "pessoa": " Réu ",
                "envolvidos": " Banco do Brasil S A Advogado: Louise Rainer Pereira Gionédis "
            }
        ],
        "movimentacoesLista": [
            {
                "data": " 24/08/2023 ",
                "movimento": " Arquivado Definitivamente "
            },
            {
                "data": " 24/08/2023 ",
                "movimento": " Certidão de Arquivamento Sem Custas a recolher Certidão de Arquivamento Sem Custas a Recolher "
            },
            {
                "data": " 09/08/2023 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.23.70252150-0 Tipo da Petição: Manifestação do Réu Data: 09/08/2023 14:45 "
            },
            {
                "data": " 21/07/2023 ",
                "movimento": " Ato Publicado Relação: 0450/2023 Data da Publicação: 24/07/2023 Número do Diário: 3349 "
            },
            {
                "data": " 20/07/2023 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0450/2023 Teor do ato: Autos n°: 0710802-55.2018.8.02.0001 Ação: Procedimento Comum Cível Autor: José Carlos Cerqueira Souza Filho e outro Réu: Cony Engenharia Ltda. e outro ATO ORDINATÓRIO Em cumprimento ao disposto no Provimento nº 15/2019, da Corregedoria Geral da Justiça do Estado de Alagoas, fica(m) a(s) parte(s) ré intimada(s), na pessoa do seu advogado, para, no prazo de 15 (quinze) dias, providenciar(em) o recolhimento das custas processuais, sob pena de expedição de certidão ao FUNJURIS (Resolução TJ/AL nº 19/2007) para inscrição na divida ativa estadual, após o que será arquivado o processo. Ocorrendo o pagamento, devidamente atualizado, após a emissão da supracitada certidão de débito, deverá o interessado entregar a ficha de compensação bancária quitada na sede do FUNJURIS, que se responsabilizará pela devida baixa, além de oficiar à secretaria de onde se originou o débito acerca do referido pagamento (Resolução nº 19/2007, art. 33, § 6º). Maceió, 20 de julho de 2023 Marcelo Rodrigo Falcão Vieira Analista(escrivão substituto) Advogados(s): Nelson Wilians Fratoni Rodrigues (OAB 9395AAL/), Carlos Henrique de Mendonça Brandão (OAB 6770AL /), Vinicius Faria de Cerqueira (OAB 9008/AL), Maria Eugênia Barreiros de Mello (OAB 14717AL/), Guilherme Freire Furtado (OAB 14781/AL), Vítor Reis de Araujo Carvalho (OAB 14928/AL) "
            },
            {
                "data": " 20/07/2023 ",
                "movimento": " Ato ordinatório praticado Autos n°: 0710802-55.2018.8.02.0001 Ação: Procedimento Comum Cível Autor: José Carlos Cerqueira Souza Filho e outro Réu: Cony Engenharia Ltda. e outro ATO ORDINATÓRIO Em cumprimento ao disposto no Provimento nº 15/2019, da Corregedoria Geral da Justiça do Estado de Alagoas, fica(m) a(s) parte(s) ré intimada(s), na pessoa do seu advogado, para, no prazo de 15 (quinze) dias, providenciar(em) o recolhimento das custas processuais, sob pena de expedição de certidão ao FUNJURIS (Resolução TJ/AL nº 19/2007) para inscrição na divida ativa estadual, após o que será arquivado o processo. Ocorrendo o pagamento, devidamente atualizado, após a emissão da supracitada certidão de débito, deverá o interessado entregar a ficha de compensação bancária quitada na sede do FUNJURIS, que se responsabilizará pela devida baixa, além de oficiar à secretaria de onde se originou o débito acerca do referido pagamento (Resolução nº 19/2007, art. 33, § 6º). Maceió, 20 de julho de 2023 Marcelo Rodrigo Falcão Vieira Analista(escrivão substituto)Vencimento: 10/08/2023 "
            },
            {
                "data": " 20/07/2023 ",
                "movimento": " Devolvido CJU - Cálculo de Custas Finais Realizado Devolvido CJU - Cálculo de Custas Finais Realizado "
            },
            {
                "data": " 20/07/2023 ",
                "movimento": " Realizado cálculo de custas "
            },
            {
                "data": " 20/07/2023 ",
                "movimento": " Juntada de Documento "
            },
            {
                "data": " 05/05/2023 ",
                "movimento": " Execução de Sentença Iniciada Seq.: 01 - Cumprimento de sentença "
            },
            {
                "data": " 05/05/2023 ",
                "movimento": " Ato Publicado Relação: 0282/2023 Data da Publicação: 08/05/2023 Número do Diário: 3296 "
            },
            {
                "data": " 04/05/2023 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0282/2023 Teor do ato: Autos n°: 0710802-55.2018.8.02.0001 Ação: Procedimento Comum Cível Autor: José Carlos Cerqueira Souza Filho e outro Réu: Cony Engenharia Ltda. e outro ATO ORDINATÓRIO Em cumprimento ao Provimento nº 15/2019, da Corregedoria-Geral da Justiça do Estado de Alagoas, em virtude do retorno dos autos da instância superior, manifestem-se as partes, em 15 (quinze) dias, requerendo o que de direito. Maceió, 04 de maio de 2023 Marcelo Rodrigo Falcão Vieira Analista(escrivão substituto) Advogados(s): Nelson Wilians Fratoni Rodrigues (OAB 9395A/AL), Carlos Henrique de Mendonça Brandão (OAB 6770/AL), Vinicius Faria de Cerqueira (OAB 9008/AL), Maria Eugênia Barreiros de Mello (OAB 14717/AL), Guilherme Freire Furtado (OAB 14781/AL), Vítor Reis de Araujo Carvalho (OAB 14928/AL) "
            },
            {
                "data": " 04/05/2023 ",
                "movimento": " Recebido pela Contadoria UNIFICADA "
            },
            {
                "data": " 04/05/2023 ",
                "movimento": " Ato Ordinatório - Artigo 162, §4º, CPC Ato Ordinatório- Remessa à contadoria "
            },
            {
                "data": " 04/05/2023 ",
                "movimento": " Ato ordinatório praticado Autos n°: 0710802-55.2018.8.02.0001 Ação: Procedimento Comum Cível Autor: José Carlos Cerqueira Souza Filho e outro Réu: Cony Engenharia Ltda. e outro ATO ORDINATÓRIO Em cumprimento ao Provimento nº 15/2019, da Corregedoria-Geral da Justiça do Estado de Alagoas, em virtude do retorno dos autos da instância superior, manifestem-se as partes, em 15 (quinze) dias, requerendo o que de direito. Maceió, 04 de maio de 2023 Marcelo Rodrigo Falcão Vieira Analista(escrivão substituto)Vencimento: 25/05/2023 "
            },
            {
                "data": " 03/05/2023 ",
                "movimento": " Transitado em Julgado "
            },
            {
                "data": " 03/05/2023 ",
                "movimento": " Recebimento da Instância Superior - Altera situação para \"Julgado\" "
            },
            {
                "data": " 26/04/2023 ",
                "movimento": " Recebido recurso eletrônico Data do julgamento: 07/10/2021 Trânsito em julgado: Tipo de julgamento: Acórdão Decisão: à unanimidade de votos, em CONHECER de ambos os recursos de Apelação Cível; e, no mérito, por idêntica votação, NEGAR-LHES PROVIMENTO, mantendo incólume a Sentença proferida pelo Juízo de Direito de Primeiro Grau. Acordam, ainda, em majorar os honorários advocatícios sucumbenciais para 17% sobre o valor da condenação, nos termos do voto do Relator. Situação do provimento: Relator: Des. Otávio Leão Praxedes "
            },
            {
                "data": " 22/02/2021 ",
                "movimento": " Remetido recurso eletrônico ao Tribunal de Justiça/Turma de recurso "
            },
            {
                "data": " 10/02/2021 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.21.70031538-2 Tipo da Petição: Contrarrazões Data: 10/02/2021 19:27 "
            },
            {
                "data": " 06/01/2021 ",
                "movimento": " Ato Publicado Relação :0003/2021 Data da Publicação: 21/01/2021 Número do Diário: 2738 "
            },
            {
                "data": " 06/01/2021 ",
                "movimento": " Ato Publicado Relação :0003/2021 Data da Publicação: 21/01/2021 Número do Diário: 2738 "
            },
            {
                "data": " 06/01/2021 ",
                "movimento": " Ato Publicado Relação :0003/2021 Data da Publicação: 21/01/2021 Número do Diário: 2738 "
            },
            {
                "data": " 06/01/2021 ",
                "movimento": " Ato Publicado Relação :0003/2021 Data da Publicação: 21/01/2021 Número do Diário: 2738 "
            },
            {
                "data": " 06/01/2021 ",
                "movimento": " Ato Publicado Relação :0003/2021 Data da Publicação: 21/01/2021 Número do Diário: 2738 "
            },
            {
                "data": " 06/01/2021 ",
                "movimento": " Ato Publicado Relação :0003/2021 Data da Publicação: 21/01/2021 Número do Diário: 2738 "
            },
            {
                "data": " 05/01/2021 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0003/2021 Teor do ato: Ato Ordinatório: Interposto recurso de apelação pelos réus (Banco do Brasil e Cony Engenharia), intime-se a parte recorrida para apresentar contrarrazões, no prazo de 15 (quinze) dias, conforme o art. 1010,§ 1º do CPC. Se apresentada Apelação Adesiva pela parte recorrida (art.997, §2º do CPC), intime-se a parte contrária para contrarrazões, no prazo de 15 (quinze) dias, nos termos do Art. 1010, §2º do CPC. Caso as contrarrazões do recurso principal ou do adesivo ventilem matérias elencadas no art.1009, §1º do CPC, intime-se o recorrente para se manifestar sobre elas no prazo de 15(quinze) dias, conforme o art. 1009, § 2º, do CPC. Após as providências acima, remetam-se os autos ao Egrégio Tribunal de Justiça. Maceió, 04 de janeiro de 2021. Fernanda Patrícia Belo Marques Técnico Judiciário Advogados(s): Carlos Henrique de Mendonça Brandão (OAB 6770/AL), Vinicius Faria de Cerqueira (OAB 9008/AL), Nelson Wilians Fratoni Rodrigues (OAB 9395A/AL), Maria Eugênia Barreiros de Mello (OAB 14717/AL), Guilherme Freire Furtado (OAB 14781/AL), Vítor Reis de Araujo Carvalho (OAB 14928/AL) "
            },
            {
                "data": " 04/01/2021 ",
                "movimento": " Ato Ordinatório - Artigo 162, §4º, CPC Ato Ordinatório: Interposto recurso de apelação pelos réus (Banco do Brasil e Cony Engenharia), intime-se a parte recorrida para apresentar contrarrazões, no prazo de 15 (quinze) dias, conforme o art. 1010,§ 1º do CPC. Se apresentada Apelação Adesiva pela parte recorrida (art.997, §2º do CPC), intime-se a parte contrária para contrarrazões, no prazo de 15 (quinze) dias, nos termos do Art. 1010, §2º do CPC. Caso as contrarrazões do recurso principal ou do adesivo ventilem matérias elencadas no art.1009, §1º do CPC, intime-se o recorrente para se manifestar sobre elas no prazo de 15(quinze) dias, conforme o art. 1009, § 2º, do CPC. Após as providências acima, remetam-se os autos ao Egrégio Tribunal de Justiça. Maceió, 04 de janeiro de 2021. Fernanda Patrícia Belo Marques Técnico Judiciário "
            },
            {
                "data": " 18/12/2020 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.20.70269584-0 Tipo da Petição: Juntada de Instrumento de Procuração Data: 18/12/2020 17:23 "
            },
            {
                "data": " 18/12/2020 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.20.70269581-5 Tipo da Petição: Recurso de Apelação Data: 18/12/2020 17:18 "
            },
            {
                "data": " 15/12/2020 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.20.70265228-8 Tipo da Petição: Recurso de Apelação Data: 15/12/2020 13:26 "
            },
            {
                "data": " 24/11/2020 ",
                "movimento": " Ato Publicado Relação :0912/2020 Data da Publicação: 25/11/2020 Número do Diário: 2711 "
            },
            {
                "data": " 24/11/2020 ",
                "movimento": " Ato Publicado Relação :0912/2020 Data da Publicação: 25/11/2020 Número do Diário: 2711 "
            },
            {
                "data": " 24/11/2020 ",
                "movimento": " Ato Publicado Relação :0912/2020 Data da Publicação: 25/11/2020 Número do Diário: 2711 "
            },
            {
                "data": " 24/11/2020 ",
                "movimento": " Ato Publicado Relação :0912/2020 Data da Publicação: 25/11/2020 Número do Diário: 2711 "
            },
            {
                "data": " 23/11/2020 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0912/2020 Teor do ato: Forte nessas razões, JULGO PARCIALMENTE PROCEDENTES os pedidos da proemial, julgando extinto o processo com resolução de mérito, nos termos do art. 487, inciso I, do Estatuto Processual emergente, para o fim de CONDENAR AS DEMANDADAS, solidariamente: a) a ressarcir os danos materiais promovidos (lucros cessantes), cujo valor fixo em R$ 1.500,00 (três mil e quinhentos reais), por cada mês de atraso na entrega do imóvel , a incidir desde o dia 1 de agosto de 2017 até a data da efetiva entrega do imóvel, a ser apurada na fase de liquidação da sentença. Ressalto que esses valores deverão ser atualizados monetariamente pelo INPC desde a data em que cada aluguel seria devido, e acrescidos de juros de mora de 1% (um por cento) ao mês, contados da citação (art. 405 do Código Substantivo Civil). Para aqueles que venceram após a data da propositura da demanda, o juros de mora deverá incidir a partir da data de cada inadimplemento, para obstar o enriquecimento sem causa; b) em donos morais de R$ 5.000,00 (cinco mil reais), com juros de mora de 1% (um por cento) ao mês, a partir do dia 1 de agosto de 2017 (art. 397). Correção monetária, pelo INPC, desde a data do arbitramento; c) determino a substituição do índice INCC pelo IGP-M, a partir de 01 de agosto de 2017, e, como colorário, a devolução dos valores pagos a maior, com suas respectivas atualizações, nas mesmas condições do item a, deste dispositivo. Rejeito o pedido de restituição em dobro, por não vislumbrar má-fé dos beneficiários dos pagamentos indevidos. Oportunamente, condeno as demandada ao pagamento das custas e despesas processuais e dos honorários do advogado da parte adversa, que fixo, nos termos do art. 85, §2º, do Código de Processo Civil, e considerada a complexidade da demanda e as intervenções que exigiu, em 15% (quinze por cento) sobre o valor atualizado da condenação. Por fim, de modo a evitar o ajuizamento de embargos de declaração meramente protelatórios, registre-se que, ficam preteridas as demais alegações, por incompatíveis com a linha de raciocínio adotada, observando que os pedidos de ambas as partes foram apreciados nos limites em que foram formulados. Com efeito, ficam as partes advertidas, desde logo, que a oposição de embargos de declaração fora das hipóteses legais e/ou com postulação meramente infringente lhes sujeitará a imposição da multa prevista pelo artigo 1026, §2º, do Código de Processo Civil. Publique-se. Registre-se. Intimem-se. Advogados(s): Orlando de Moura Cavalcante Neto (OAB 7313/AL), Thiago Maia Nobre Rocha (OAB 6213/AL), Vinicius Faria de Cerqueira (OAB 9008/AL), Marcus Vinicius Cavalcante Lins Filho (OAB 10871/AL) "
            },
            {
                "data": " 23/11/2020 ",
                "movimento": " Julgado procedente em parte do pedido Forte nessas razões, JULGO PARCIALMENTE PROCEDENTES os pedidos da proemial, julgando extinto o processo com resolução de mérito, nos termos do art. 487, inciso I, do Estatuto Processual emergente, para o fim de CONDENAR AS DEMANDADAS, solidariamente: a) a ressarcir os danos materiais promovidos (lucros cessantes), cujo valor fixo em R$ 1.500,00 (três mil e quinhentos reais), por cada mês de atraso na entrega do imóvel , a incidir desde o dia 1 de agosto de 2017 até a data da efetiva entrega do imóvel, a ser apurada na fase de liquidação da sentença. Ressalto que esses valores deverão ser atualizados monetariamente pelo INPC desde a data em que cada aluguel seria devido, e acrescidos de juros de mora de 1% (um por cento) ao mês, contados da citação (art. 405 do Código Substantivo Civil). Para aqueles que venceram após a data da propositura da demanda, o juros de mora deverá incidir a partir da data de cada inadimplemento, para obstar o enriquecimento sem causa; b) em donos morais de R$ 5.000,00 (cinco mil reais), com juros de mora de 1% (um por cento) ao mês, a partir do dia 1 de agosto de 2017 (art. 397). Correção monetária, pelo INPC, desde a data do arbitramento; c) determino a substituição do índice INCC pelo IGP-M, a partir de 01 de agosto de 2017, e, como colorário, a devolução dos valores pagos a maior, com suas respectivas atualizações, nas mesmas condições do item a, deste dispositivo. Rejeito o pedido de restituição em dobro, por não vislumbrar má-fé dos beneficiários dos pagamentos indevidos. Oportunamente, condeno as demandada ao pagamento das custas e despesas processuais e dos honorários do advogado da parte adversa, que fixo, nos termos do art. 85, §2º, do Código de Processo Civil, e considerada a complexidade da demanda e as intervenções que exigiu, em 15% (quinze por cento) sobre o valor atualizado da condenação. Por fim, de modo a evitar o ajuizamento de embargos de declaração meramente protelatórios, registre-se que, ficam preteridas as demais alegações, por incompatíveis com a linha de raciocínio adotada, observando que os pedidos de ambas as partes foram apreciados nos limites em que foram formulados. Com efeito, ficam as partes advertidas, desde logo, que a oposição de embargos de declaração fora das hipóteses legais e/ou com postulação meramente infringente lhes sujeitará a imposição da multa prevista pelo artigo 1026, §2º, do Código de Processo Civil. Publique-se. Registre-se. Intimem-se.Vencimento: 16/12/2020 "
            },
            {
                "data": " 23/09/2020 ",
                "movimento": " Conclusos "
            },
            {
                "data": " 16/08/2020 ",
                "movimento": " Visto em Autoinspeção Despacho Visto em Autoinspeção "
            },
            {
                "data": " 11/05/2020 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.20.70092549-0 Tipo da Petição: Pedido de Andamento do proc./sent./decisões/desp. Data: 11/05/2020 13:28 "
            },
            {
                "data": " 10/12/2019 ",
                "movimento": " Conclusos "
            },
            {
                "data": " 11/11/2019 ",
                "movimento": " Despacho de Mero Expediente DESPACHO Compulsando detidamente o feito, verifico que este inclui-se nos processos com prioridade de impulsionamento, consoante recomendação exarada pelo Conselho Nacional de Justiça, a qual determina a priorização de andamento das demandas paralisadas há mais de 100 (dias). Destarte, considerando que cada uma desses processos exige análise acurada por este magistrado a fim de que lhe seja dado efetivo provimento, determino a conclusão de todos os autos que se amoldem à hipótese alhures delineada - de competência do gabinete - para análise e devido impulsionamento, este especificamente, na fila concluso - impulso ao feito. Cumpra-se. Maceió(AL), 11 de novembro de 2019. José Cícero Alves da Silva Juiz de Direito "
            },
            {
                "data": " 12/07/2019 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.19.70150828-9 Tipo da Petição: Petição Data: 11/07/2019 23:50 "
            },
            {
                "data": " 12/02/2019 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.19.70034823-7 Tipo da Petição: Petição Data: 12/02/2019 14:58 "
            },
            {
                "data": " 11/02/2019 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.19.70032532-6 Tipo da Petição: Petição Data: 11/02/2019 09:13 "
            },
            {
                "data": " 06/12/2018 ",
                "movimento": " Conclusos "
            },
            {
                "data": " 05/12/2018 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.18.70259903-1 Tipo da Petição: Petição Data: 05/12/2018 16:46 "
            },
            {
                "data": " 29/11/2018 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.18.70255192-6 Tipo da Petição: Petição Data: 29/11/2018 15:07 "
            },
            {
                "data": " 28/11/2018 ",
                "movimento": " Ato Publicado Relação :0499/2018 Data da Publicação: 29/11/2018 Número do Diário: 2233 "
            },
            {
                "data": " 27/11/2018 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0499/2018 Teor do ato: ATO ORDINATÓRIO Em cumprimento ao disposto no art. 152,VI do CPC, procedo à intimação das partes para especificarem e justificarem as provas que ainda pretendem produzir, fundamentamente, pelo prazo comum de 5(cinco) dias. Maceió, 27 de novembro de 2018 Advogados(s): Orlando de Moura Cavalcante Neto (OAB 7313/AL), Thiago Maia Nobre Rocha (OAB 6213/AL), Vinicius Faria de Cerqueira (OAB 9008/AL), Rafael Sganzerla Durand (OAB 10132A/AL), Marcus Vinicius Cavalcante Lins Filho (OAB 10871/AL) "
            },
            {
                "data": " 27/11/2018 ",
                "movimento": " Ato ordinatório praticado ATO ORDINATÓRIO Em cumprimento ao disposto no art. 152,VI do CPC, procedo à intimação das partes para especificarem e justificarem as provas que ainda pretendem produzir, fundamentamente, pelo prazo comum de 5(cinco) dias. Maceió, 27 de novembro de 2018 "
            },
            {
                "data": " 26/11/2018 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.18.70251514-8 Tipo da Petição: Impugnação à Contestação Data: 26/11/2018 15:37 "
            },
            {
                "data": " 26/11/2018 ",
                "movimento": " Juntada de Documento Nº Protocolo: WMAC.18.70251511-3 Tipo da Petição: Impugnação à Contestação Data: 26/11/2018 15:35 "
            },
            {
                "data": " 09/11/2018 ",
                "movimento": " Ato Publicado Relação :0456/2018 Data da Publicação: 12/11/2018 Número do Diário: 2222 "
            },
            {
                "data": " 08/11/2018 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0456/2018 Teor do ato: Autos n°: 0710802-55.2018.8.02.0001 Ação: Procedimento Ordinário Autor: José Carlos Cerqueira Souza Filho e outro Réu: Conaço Engenharia Ltda. e outro ATO ORDINATÓRIO Intimo a parte autora a apresentar, querendo, no prazo de 15 (quinze) dias, impugnação às contestações. Maceió, 06 de novembro de 2018 Hallph Sá de Araújo Analista Judiciário Advogados(s): Vinicius Faria de Cerqueira (OAB 9008/AL) "
            },
            {
                "data": " 06/11/2018 ",
                "movimento": " Ato ordinatório praticado Autos n°: 0710802-55.2018.8.02.0001 Ação: Procedimento Ordinário Autor: José Carlos Cerqueira Souza Filho e outro Réu: Conaço Engenharia Ltda. e outro ATO ORDINATÓRIO Intimo a parte autora a apresentar, querendo, no prazo de 15 (quinze) dias, impugnação às contestações. Maceió, 06 de novembro de 2018 Hallph Sá de Araújo Analista JudiciárioVencimento: 29/11/2018 "
            },
            {
                "data": " 16/10/2018 ",
                "movimento": " Juntada de Documentos Nº Protocolo: WMAC.18.70221617-5 Tipo da Petição: Contestação Data: 16/10/2018 14:43 "
            },
            {
                "data": " 10/10/2018 ",
                "movimento": " Juntada de Documentos Nº Protocolo: WMAC.18.70218154-1 Tipo da Petição: Contestação Data: 10/10/2018 14:04 "
            },
            {
                "data": " 24/09/2018 ",
                "movimento": " Juntada de Documento "
            },
            {
                "data": " 24/09/2018 ",
                "movimento": " Juntada de Documento "
            },
            {
                "data": " 24/09/2018 ",
                "movimento": " Audiência Realizada Assentada - Genérico "
            },
            {
                "data": " 24/09/2018 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.18.70203989-3 Tipo da Petição: Petição Data: 24/09/2018 10:09 "
            },
            {
                "data": " 21/09/2018 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.18.70203544-8 Tipo da Petição: Petição Data: 21/09/2018 18:07 "
            },
            {
                "data": " 21/09/2018 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.18.70203528-6 Tipo da Petição: Petição Data: 21/09/2018 17:42 "
            },
            {
                "data": " 21/09/2018 ",
                "movimento": " Juntada de Petição Nº Protocolo: WMAC.18.70203260-0 Tipo da Petição: Petição Data: 21/09/2018 13:58 "
            },
            {
                "data": " 20/09/2018 ",
                "movimento": " Visto em correição DESPACHO VISTO EM CORREIÇÃO "
            },
            {
                "data": " 06/06/2018 ",
                "movimento": " Juntada de AR - Cumprido Em 06 de junho de 2018 é juntado a estes autos o aviso de recebimento (AR803969759TJ - Cumprido), referente ao ofício n. 0710802-55.2018.8.02.0001-0002, emitido para Conaço Engenharia Ltda.. Usuário: "
            },
            {
                "data": " 06/06/2018 ",
                "movimento": " Juntada de AR - Cumprido Em 06 de junho de 2018 é juntado a estes autos o aviso de recebimento (AR803969745TJ - Cumprido), referente ao ofício n. 0710802-55.2018.8.02.0001-0001, emitido para Banco do Brasil S A. Usuário: "
            },
            {
                "data": " 15/05/2018 ",
                "movimento": " Ato Publicado Relação :0220/2018 Data da Publicação: 16/05/2018 Número do Diário: 2105 "
            },
            {
                "data": " 15/05/2018 ",
                "movimento": " Ato Publicado Relação :0220/2018 Data da Publicação: 16/05/2018 Número do Diário: 2105 "
            },
            {
                "data": " 11/05/2018 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0220/2018 Teor do ato: DECISÃOTrata-se de ação ordinária de indenização por danos morais e materias c/c obrigação de fazer c/c declaração de nulidade de contrato de financiamento bancário c/c pedido de tutela antecipada proposta por JOSÉ CARLOS CERQUEIRA SOUZA FILHO e LIVIA NASCIMENTO DA ROCHA, qualificados na inicial, em face de a CONY ENGENHARIA LTDA. e BANCO DO BRASIL, igualmente qualificados.Narra a exordial que os autores adquiriram o apartamento residencial de nº 502, da Torre I, do Empreendimento Residencial Dellavia Park Club, situado na Ladeira Murilo Monteiro Valente, n.º 375, no bairro do Barro Duro, Maceió/AL, cuja vendedora foi a ré CONY ENGENHARIA LTDA., pelo valor de R$ 232.000,00 (duzentos e trinta e dois mil reais).Segue narrando que o instrumento celebrado em 02/12/2013 previa a entrega do imóvel no prazo de 36 (trinta e seis) meses contados do início da obra, sendo admitida uma tolerância de no máximo 18 (dezoito) meses. Dentro dessa perspectiva, foi prometido que a obra seria iniciada em no máximo 60 (sessenta) dias da assinatura do contrato, ou seja seria iniciada em 02/02/2014 com previsão de entrega para 02/02/2017, porém, até a presente data a obra não foi concluída.Aduz que os demandantes ainda sendo cobrados ilegalmente pelo BANCO DO BRASIL, também réu da ação, numa suposta \"taxa de obra\", que decorre de financiamento bancário.Requer, em sede de tutela de urgência, que seja determinado ao BANCO DO BRASIL a SUSPENSÃO da cobrança de taxa de Obra.É o relatório. Decido.Ab initio, concedo aos Demandantes as benesses da assistência judiciária gratuita, em respeito as determinações contidas no art. 98 e art. 99 da Lei nº. 13.105/2015 (Código de Processo Civil - CPC/2015).O Código de Defesa do Consumidor, em seu art. 6.º, VIII, assegura como direito básico do consumidor a facilitação da defesa de seus direitos, inclusive com a inversão do ônus da prova, a seu favor, quando, a critério do juiz, for verossímil a alegação ou quando for ele hipossuficiente, segundo as regras ordinárias de experiência. Busca-se, assim assegurar a igualdade material.Em que pese bastar apenas um dos requisitos para a inversão, o caso em tela preenche as duas condições. Assim com fulcro no art. 6.º, VIII, do CDC DECIDO POR INVERTER O ÔNUS DA PROVA.Passo a apreciar o pedido de tutela provisória de urgência.Segundo o art. 300 do CPC/15, a tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo. O dispositivo deixa evidentes os requisitos da tutela antecipada de urgência, quais sejam, a probabilidade do direito, doutrinariamente conhecida como fumus boni iuris, e o perigo de dano ou risco ao resultado útil do processo, chamado periculum in mora.Nesse trilhar, importa esclarecer que a tutela de urgência antecipada se funda em um Juízo de cognição sumária, de modo que a medida, quando concedida, será precária, haja vista ser fundamental a necessidade de ser reversível (300, §3º, do CPC/2015).Portanto, a antecipação provisória dos efeitos finais da tutela definitiva, permite o gozo antecipado e imediato dos efeitos próprios da tutela definitiva pretendida, mas não se funda em um juízo de valor exauriente, de modo que pode ser desconstituída a qualquer tempo.Nessa esteira de pensamento, passa-se a analisar o caso concreto e o preenchimento dos requisitos necessários à concessão da tutela provisória pretendida.No caso em tela, pretende a parte autora a suspensão da cobrança da \"taxa de obra\", em razão do suposto descumprimento contratual por parte da demandada no tocante ao prazo estabelecido para a entrega do imóvel.Conforme se extrai dos autos, as partes firmaram um contrato de compra e venda de um apartamento, tendo sido estipulada o prazo para sua entrega em 36 (trinta e seis) meses, com um prazo de tolerância de 18 (dezoito) meses, consoante cláusula quarta do contrato (fls.39). Logo o prazo final para entrega do imóvel se encerra em 02/08/2018, levando em consideração o prazo de tolerância estabelecido no contrato.É cediço que a taxa de evolução de obra é devida desde a aprovação do financiamento até o término da obra. Portanto, se a obra atrasar, é devido o pagamento da referida taxa ao banco que financiou o imóvel, no caso, o Banco do Brasil, até a sua conclusão. Sendo certo que ocorrendo a mora da construtora requerida em relação à entrega do imóvel, a parte autora não pode ser penalizada com o pagamento de tal encargo. No entanto, no caso em deslinde, ainda não houve mora da construtora, haja vista que ainda não fora encerrado o prazo estimado para entrega do imóvel. Nesse ponto impende destacar que é legal a cláusula contratual que prevê a prorrogação do prazo razoável para entrega do imóvel, considerando o princípio pacta sunt servanda. Desta feita, verifica-se a ausência de probabilidade do direito da parte autora, haja vista que, consoante dito alhures, a taxa de evolução de obra é devida até a conclusão da obra, bem como que não houve mora por parte da construtora demandada, haja vista que não houve, ainda, atraso na entrega do imóvel, tendo em vista a cláusula que prevê prazo de tolerância para entrega do imóvel.Ante o exposto, por considerar ausente a probabilidade do direito (art. 300 do CPC/15), INDEFIRO o pedido de tutela de urgência requestado.Inclua-se o feito em pauta de audiência de conciliação. Cite-se a parte ré eintime-a desta decisão, bem como para que compareça à audiência na data designada pelo Cartório, o que deve ser feito com antecedência mínima de 20 dias.Intime-se os autores por advogado constituído (art. 334, §3º, CPC/15).Deverá a parte ré ser advertida da possibilidade do art. 334, §5º, bem como do termo inicial do prazo de contestação (art. 335).Fiquem as partes advertidas, ainda, de que o não comparecimento injustificado à audiência de conciliação é considerado ato atentatório à dignidade da justiça e será sancionado com multa de até dois por cento da vantagem econômica pretendida ou do valor da causa (art. 334, §8º).Publique-se. Intime-seMaceió, 10 de maio de 2018.Henrique Gomes de Barros TeixeiraJuiz de Direito Advogados(s): Vinicius Faria de Cerqueira (OAB 9008/AL) "
            },
            {
                "data": " 11/05/2018 ",
                "movimento": " Disponibilização no Diário da Justiça Eletrônico Relação: 0220/2018 Teor do ato: Conciliação Data: 24/09/2018 Hora 14:00 Local: Sala de Audiência Situacão: Pendente Advogados(s): Vinicius Faria de Cerqueira (OAB 9008/AL) "
            },
            {
                "data": " 11/05/2018 ",
                "movimento": " Carta Expedida AR DIGITAL - Citação e Intimação - Audiência de Instrução e Julgamento - Juizado "
            },
            {
                "data": " 11/05/2018 ",
                "movimento": " Carta Expedida AR DIGITAL - Citação e Intimação - Audiência de Instrução e Julgamento - Juizado "
            },
            {
                "data": " 11/05/2018 ",
                "movimento": " Audiência Designada Conciliação Data: 24/09/2018 Hora 14:00 Local: Sala de Audiência Situacão: Realizada "
            },
            {
                "data": " 10/05/2018 ",
                "movimento": " Não Concedida a Antecipação de tutela DECISÃOTrata-se de ação ordinária de indenização por danos morais e materias c/c obrigação de fazer c/c declaração de nulidade de contrato de financiamento bancário c/c pedido de tutela antecipada proposta por JOSÉ CARLOS CERQUEIRA SOUZA FILHO e LIVIA NASCIMENTO DA ROCHA, qualificados na inicial, em face de a CONY ENGENHARIA LTDA. e BANCO DO BRASIL, igualmente qualificados.Narra a exordial que os autores adquiriram o apartamento residencial de nº 502, da Torre I, do Empreendimento Residencial Dellavia Park Club, situado na Ladeira Murilo Monteiro Valente, n.º 375, no bairro do Barro Duro, Maceió/AL, cuja vendedora foi a ré CONY ENGENHARIA LTDA., pelo valor de R$ 232.000,00 (duzentos e trinta e dois mil reais).Segue narrando que o instrumento celebrado em 02/12/2013 previa a entrega do imóvel no prazo de 36 (trinta e seis) meses contados do início da obra, sendo admitida uma tolerância de no máximo 18 (dezoito) meses. Dentro dessa perspectiva, foi prometido que a obra seria iniciada em no máximo 60 (sessenta) dias da assinatura do contrato, ou seja seria iniciada em 02/02/2014 com previsão de entrega para 02/02/2017, porém, até a presente data a obra não foi concluída.Aduz que os demandantes ainda sendo cobrados ilegalmente pelo BANCO DO BRASIL, também réu da ação, numa suposta \"taxa de obra\", que decorre de financiamento bancário.Requer, em sede de tutela de urgência, que seja determinado ao BANCO DO BRASIL a SUSPENSÃO da cobrança de taxa de Obra.É o relatório. Decido.Ab initio, concedo aos Demandantes as benesses da assistência judiciária gratuita, em respeito as determinações contidas no art. 98 e art. 99 da Lei nº. 13.105/2015 (Código de Processo Civil - CPC/2015).O Código de Defesa do Consumidor, em seu art. 6.º, VIII, assegura como direito básico do consumidor a facilitação da defesa de seus direitos, inclusive com a inversão do ônus da prova, a seu favor, quando, a critério do juiz, for verossímil a alegação ou quando for ele hipossuficiente, segundo as regras ordinárias de experiência. Busca-se, assim assegurar a igualdade material.Em que pese bastar apenas um dos requisitos para a inversão, o caso em tela preenche as duas condições. Assim com fulcro no art. 6.º, VIII, do CDC DECIDO POR INVERTER O ÔNUS DA PROVA.Passo a apreciar o pedido de tutela provisória de urgência.Segundo o art. 300 do CPC/15, a tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo. O dispositivo deixa evidentes os requisitos da tutela antecipada de urgência, quais sejam, a probabilidade do direito, doutrinariamente conhecida como fumus boni iuris, e o perigo de dano ou risco ao resultado útil do processo, chamado periculum in mora.Nesse trilhar, importa esclarecer que a tutela de urgência antecipada se funda em um Juízo de cognição sumária, de modo que a medida, quando concedida, será precária, haja vista ser fundamental a necessidade de ser reversível (300, §3º, do CPC/2015).Portanto, a antecipação provisória dos efeitos finais da tutela definitiva, permite o gozo antecipado e imediato dos efeitos próprios da tutela definitiva pretendida, mas não se funda em um juízo de valor exauriente, de modo que pode ser desconstituída a qualquer tempo.Nessa esteira de pensamento, passa-se a analisar o caso concreto e o preenchimento dos requisitos necessários à concessão da tutela provisória pretendida.No caso em tela, pretende a parte autora a suspensão da cobrança da \"taxa de obra\", em razão do suposto descumprimento contratual por parte da demandada no tocante ao prazo estabelecido para a entrega do imóvel.Conforme se extrai dos autos, as partes firmaram um contrato de compra e venda de um apartamento, tendo sido estipulada o prazo para sua entrega em 36 (trinta e seis) meses, com um prazo de tolerância de 18 (dezoito) meses, consoante cláusula quarta do contrato (fls.39). Logo o prazo final para entrega do imóvel se encerra em 02/08/2018, levando em consideração o prazo de tolerância estabelecido no contrato.É cediço que a taxa de evolução de obra é devida desde a aprovação do financiamento até o término da obra. Portanto, se a obra atrasar, é devido o pagamento da referida taxa ao banco que financiou o imóvel, no caso, o Banco do Brasil, até a sua conclusão. Sendo certo que ocorrendo a mora da construtora requerida em relação à entrega do imóvel, a parte autora não pode ser penalizada com o pagamento de tal encargo. No entanto, no caso em deslinde, ainda não houve mora da construtora, haja vista que ainda não fora encerrado o prazo estimado para entrega do imóvel. Nesse ponto impende destacar que é legal a cláusula contratual que prevê a prorrogação do prazo razoável para entrega do imóvel, considerando o princípio pacta sunt servanda. Desta feita, verifica-se a ausência de probabilidade do direito da parte autora, haja vista que, consoante dito alhures, a taxa de evolução de obra é devida até a conclusão da obra, bem como que não houve mora por parte da construtora demandada, haja vista que não houve, ainda, atraso na entrega do imóvel, tendo em vista a cláusula que prevê prazo de tolerância para entrega do imóvel.Ante o exposto, por considerar ausente a probabilidade do direito (art. 300 do CPC/15), INDEFIRO o pedido de tutela de urgência requestado.Inclua-se o feito em pauta de audiência de conciliação. Cite-se a parte ré eintime-a desta decisão, bem como para que compareça à audiência na data designada pelo Cartório, o que deve ser feito com antecedência mínima de 20 dias.Intime-se os autores por advogado constituído (art. 334, §3º, CPC/15).Deverá a parte ré ser advertida da possibilidade do art. 334, §5º, bem como do termo inicial do prazo de contestação (art. 335).Fiquem as partes advertidas, ainda, de que o não comparecimento injustificado à audiência de conciliação é considerado ato atentatório à dignidade da justiça e será sancionado com multa de até dois por cento da vantagem econômica pretendida ou do valor da causa (art. 334, §8º).Publique-se. Intime-seMaceió, 10 de maio de 2018.Henrique Gomes de Barros TeixeiraJuiz de DireitoVencimento: 01/06/2018 "
            },
            {
                "data": " 03/05/2018 ",
                "movimento": " Conclusos "
            },
            {
                "data": " 02/05/2018 ",
                "movimento": " Conclusos "
            },
            {
                "data": " 02/05/2018 ",
                "movimento": " Distribuído por Sorteio "
            }
        ]
    },
    "segundaInstancia": {
        "numero": " 0710802-55.2018.8.02.0001 ",
        "classe": " Apelação Cível",
        "area": "Cível",
        "dataDistribuicao": "",
        "valorAcao": "281.178,42",
        "partesProcesso": [
            {
                "pessoa": " Apelante: ",
                "envolvidos": " Cony Engenharia Ltda. Advogado: Carlos Henrique de Mendonça Brandão Advogado: Guilherme Freire Furtado Advogada: Maria Eugênia Barreiros de Mello Advogado: Vítor Reis de Araujo Carvalho "
            },
            {
                "pessoa": " Apelante: ",
                "envolvidos": " Banco do Brasil S A Advogado: Nelson Wilians Fratoni Rodrigues "
            },
            {
                "pessoa": " Apelado: ",
                "envolvidos": " José Carlos Cerqueira Souza Filho Advogado: Vinicius Faria de Cerqueira "
            },
            {
                "pessoa": " Apelada: ",
                "envolvidos": " Livia Nascimento da Rocha Advogado: Vinicius Faria de Cerqueira "
            }
        ],
        "movimentacoesLista": [
            {
                "data": " 26/04/2023 ",
                "movimento": " Certidão de Envio ao 1º Grau Faço remessa dos presentes autos à Origem. "
            },
            {
                "data": " 26/04/2023 ",
                "movimento": " Baixa Definitiva "
            },
            {
                "data": " 26/04/2023 ",
                "movimento": " Certidão Emitida TERMO DE BAIXA Faço baixar estes autos ao Exmo(a). Juiz(a) de Direito da 4ª Vara Cível da Capital, em cumprimento ao despacho de página 872. Maceió, 26 de abril de 2023. Eleonora Paes Cerqueira de França Diretora Adjunta Especial de Assuntos Judiciários Cícera Cristina Lima de Araújo Bandeira Analista Judiciário "
            },
            {
                "data": " 12/04/2023 ",
                "movimento": " Publicado "
            },
            {
                "data": " 12/04/2023 ",
                "movimento": " Certidão Emitida Certifico que foi disponibilizado(a) no Diário da Justiça Eletrônico do Tribunal de Justiça de Alagoas, nesta data, o(a) Despacho/Decisão retro, nos termos do art 4º, § 3º, da Lei nº 11.419/2006. Maceió, 12 de abril de 2023 Eleonora Paes Cerqueira de França Diretora Adjunta Especial de Assuntos Judiciários "
            },
            {
                "data": " 11/04/2023 ",
                "movimento": " Proferido despacho de mero expediente Agravo em Recurso Especial em Apelação Cível nº 0710802-55.2018.8.02.0001 Relator: Des. Orlando Rocha Filho Agravante : Cony Engenharia Ltda.. Advogados : Carlos Henrique de Mendonça Brandão (OAB: 6770/AL) e outros Agravado : José Carlos Cerqueira Souza Filho. Advogados : Vinicius Faria de Cerqueira (OAB: 9008/AL) e outros DESPACHO Cotejando os autos, observa-se que o Superior Tribunal de Justiça não acolheu a insurgência recursal (cf. fls. 863-867), tendo a respectiva Decisão transitado em julgado, e sendo mantido, assim, o Acórdão desta Corte Estadual. Diante disso, proceda-se à devida baixa dos autos ao Juízo de origem, atentando-se às formalidades de praxe. Publique-se. Intimem-se. Maceió/AL, 10 de abril de 2023. Desembargador Orlando Rocha Filho Vice-Presidente do Tribunal de Justiça de Alagoas "
            },
            {
                "data": " 23/03/2023 ",
                "movimento": " Concluso à Vice - Presidência "
            },
            {
                "data": " 23/03/2023 ",
                "movimento": " Certidão Emitida Faço estes autos conclusos ao Excelentíssimo Senhor Vice Presidente do Tribunal de Justiça de Alagoas. Maceió, 23 de março de 2023 Eleonora Paes Cerqueira de França Diretora Adjunta Especial de Assuntos Judiciários Andréia Maria Oliveira da Silva Analista Judiciário "
            },
            {
                "data": " 23/03/2023 ",
                "movimento": " Decisão dos Tribunais Superiores ...conheço do agravo para negar provimento ao recurso especial "
            },
            {
                "data": " 23/03/2023 ",
                "movimento": " Volta do STJ "
            },
            {
                "data": " 18/01/2023 ",
                "movimento": " Processo Transferido "
            },
            {
                "data": " 10/11/2022 ",
                "movimento": " Processo enviado STJ "
            },
            {
                "data": " 10/11/2022 ",
                "movimento": " Juntada de Documento "
            },
            {
                "data": " 10/11/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 31/10/2022 ",
                "movimento": " Publicado "
            },
            {
                "data": " 31/10/2022 ",
                "movimento": " Certidão Emitida Certifico que foi disponibilizado(a) no Diário da Justiça Eletrônico do Tribunal de Justiça de Alagoas, nesta data, o(a) Despacho/Decisão retro, nos termos do art 4º, § 3º, da Lei nº 11.419/2006. Maceió, 31 de outubro de 2022 Adriana Mota Alcides Chefe de Gabinete da Vice-Presidência "
            },
            {
                "data": " 27/10/2022 ",
                "movimento": " Recebido o recurso Sem efeito suspensivo Agravo em Recurso Especial em Apelação Cível nº 0710802-55.2018.8.02.0001 Relator: Des. José Carlos Malta Marques Agravante : Cony Engenharia Ltda.. Advogados : Carlos Henrique de Mendonça Brandão (OAB: 6770/AL) e outros Agravado : José Carlos Cerqueira Souza Filho. Advogados : Vinicius Faria de Cerqueira (OAB: 9008/AL) e outros DECISÃO 1. Nos termos do art. 1.042, §4º, do Código de Processo Civil, e tendo em vista não concordar com os argumentos suscitados pela parte agravante, mantenho a decisão recorrida por seus próprios fundamentos bem como determino, por conseguinte, a remessa dos autos ao Superior Tribunal de Justiça, para o regular processamento do Recurso Especial. Publique-se. Intimem-se. Cumpra-se. Maceió/AL, 27 de outubro de 2022. Desembargador Des. José Carlos Malta Marques Vice-Presidente do Tribunal de Justiça de Alagoas "
            },
            {
                "data": " 26/10/2022 ",
                "movimento": " Concluso à Vice - Presidência "
            },
            {
                "data": " 26/10/2022 ",
                "movimento": " Certidão Emitida CERTIFICO que decorreu o prazo para o(a) recorrido(a) ou agravado(a) apresentar as contrarrazões ao recurso interposto. CERTIFICO, finalmente, que faço CONCLUSÃO dos autos ao Relator Des. José Carlos Malta Marques, Vice-Presidente. "
            },
            {
                "data": " 30/09/2022 ",
                "movimento": " Publicado "
            },
            {
                "data": " 30/09/2022 ",
                "movimento": " Certidão Emitida Certifico que foi disponibilizado(a) no Diário da Justiça Eletrônico do Tribunal de Justiça de Alagoas, nesta data, o(a) Despacho/Decisão retro, nos termos do art 4º, § 3º, da Lei nº 11.419/2006. Maceió, 30 de setembro de 2022 Adriana Mota Alcides Chefe de Gabinete da Vice-Presidência "
            },
            {
                "data": " 28/09/2022 ",
                "movimento": " Proferido despacho de mero expediente Agravo em Recurso Especial em Apelação Cível nº 0710802-55.2018.8.02.0001 Relator: Des. José Carlos Malta Marques Agravante : Cony Engenharia Ltda.. Advogados : Carlos Henrique de Mendonça Brandão (OAB: 6770/AL) e outros Agravado : José Carlos Cerqueira Souza Filho. Advogados : Vinicius Faria de Cerqueira (OAB: 9008/AL) e outros DESPACHO 1.Determino que seja intimada a parte agravada para que esta, querendo, apresente contrarrazões ao recurso interposto, observado o prazo legal contido no art. 1.042, § 3º, do Código de Processo Civil. 2. Cumpridas as formalidades de praxe, retornem os autos conclusos, para os fins do art. 1.042, § 4º, também do CPC. Publique-se. Intimem-se. Maceió/AL, 27 de setembro de 2022. Desembargador Des. José Carlos Malta Marques Vice-Presidente do Tribunal de Justiça de Alagoas "
            },
            {
                "data": " 21/09/2022 ",
                "movimento": " Concluso à Vice - Presidência "
            },
            {
                "data": " 21/09/2022 ",
                "movimento": " Certidão Emitida CONCLUSÃO Faço estes autos conclusos ao Excelentíssimo Senhor Des. José Carlos Malta Marques, Vice - Presidente. Maceió, 21 de setembro de 2022 Eleonora Paes Cerqueira de França Diretora Adjunta Especial de Assuntos Judiciários "
            },
            {
                "data": " 21/09/2022 ",
                "movimento": " Certidão Emitida CERTIDÃO Certifico que foi interposto Agravo em Recurso Especial, como petição, em face da decisão de páginas 832-834, a qual inadmitiu o recurso. Maceió, 21 de setembro de 2022 Eleonora Paes Cerqueira de França Diretora Adjunta Especial de Assuntos Judiciários "
            },
            {
                "data": " 21/09/2022 ",
                "movimento": " Juntada de Petição de Nº Protocolo: WTRJ.22.70032323-8 Tipo da Petição: Agravo de Instrumento em Recurso Especial Data: 21/09/2022 11:03 "
            },
            {
                "data": " 31/08/2022 ",
                "movimento": " Publicado "
            },
            {
                "data": " 31/08/2022 ",
                "movimento": " Certidão Emitida Certifico que foi disponibilizado(a) no Diário da Justiça Eletrônico do Tribunal de Justiça de Alagoas, nesta data, o(a) Despacho/Decisão retro, nos termos do art 4º, § 3º, da Lei nº 11.419/2006. Maceió, 31 de agosto de 2022 Adriana Mota Alcides Chefe de Gabinete da Vice-Presidência "
            },
            {
                "data": " 29/08/2022 ",
                "movimento": " Recurso Especial não admitido Recurso Especial em Apelação Cível nº 0710802-55.2018.8.02.0001 Relator: Des. José Carlos Malta Marques Recorrente: Cony Engenharia Ltda. Advogado: Carlos Henrique de Mendonça Brandão (OAB: 6770/AL) e outros Recorrido: José Carlos Cerqueira Souza Filho e outra Advogado: Vinicius Faria de Cerqueira (OAB: 9008/AL) DECISÃO 1. Trata-se de recurso especial interposto por Cony Engenharia Ltda., com fulcro no art. 105, inciso III, alínea a , da Constituição Federal/88, contra acórdão proferido pela 2ª Câmara Cível desta Corte de Justiça. 2. O recorrente, em suas razões recursais, às fls. 760/771, aduziu que o acórdão impugnado teria violado o artigo 1022, inciso II, do Código de Processo Civil. 3. Devidamente intimado, o recorrido ofertou contrarrazões ao recurso às fls. 809/814. 4. Em seguida, retornaram os autos conclusos para juízo de admissibilidade. 5.É, em síntese, o relatório. Fundamento e decido. 6.Entendo ser importante esclarecer que a competência jurisdicional desta Vice-Presidência, de acordo com o Código de Processo Civil, com o Regimento Interno do TJAL e com o Ato Normativo nº 03/2021, da Presidência deste Sodalício, resume-se à realização do juízo de admissibilidade de recursos especiais e extraordinários e ao processamento de incidentes relacionados a tais feitos, não se confundindo com a realização de juízo de mérito dos referidos recursos, exceto naquilo em que autorizado pelo art. 1.030, incisos I e II, do Código de Processo Civil (juízo de conformidade). 7.Cumpre notar, de pronto, o preenchimento dos requisitos genéricos, objetivos e subjetivos de admissibilidade do presente recurso especial, porquanto comprovada sua tempestividade, cabimento, regularidade formal, legitimidade das partes, interesse de agir, preparo e inexistência de fato impeditivo ou extintivo do poder de recorrer. 8.Outrossim, consoante é cediço, a interposição dos recursos excepcionais pressupõe o esgotamento das vias ordinárias. Sendo assim, os recursos extraordinário e especial implicam a existência de um julgado contra o qual já foram esgotadas as possibilidades de impugnação na instância ordinária, requisito este que se encontra preenchido no presente caso. 9.Seguindo com as exigências legais, necessário se faz demonstrar uma das hipóteses constitucionais de cabimento autorizadoras de seu manejo, in casu, alegou o recorrente que o presente recurso merece ser acolhido porque preenche os requisitos previstos no artigo 105, inciso III, alínea \"a\" da Constituição Federal. 10.Pois bem. Passo a analisá-lo. 11. A defesa do recorrente, nas razões recursais, sustentou a existência de violação ao artigo 1022, inciso II, do Código de Processo Civil. 12.Ocorre que tal alegação possui natureza procrastinatória e pugna, na verdade, pela instauração de nova discussão meritória, analisar a existência de suposta ofensa, importa, necessariamente, em revolvimento de matéria fático-probatória, o que é expressamente vedado pela Súmula n° 7, do Superior Tribunal de Justiça. Vejamos o teor da referida Súmula: STJ - Súmula n.º 7 - 28/06/1990 - DJ 03.07.1990 Reexame de Prova - Recurso Especial A pretensão de simples reexame de prova não enseja recurso especial. (grifos aditados) 13.Com efeito, a tese do recorrente, amparada na alegação de existência de ofensa ao mencionado dispositivo legal, é incompatível com a natureza excepcional do recurso especial, vez que o Tribunal ad quem teria que reavaliar os fatos e provas do processo. 14.A par de tais considerações, portanto, observo que os requisitos essenciais do artigo 105, inciso III, alínea \"a\", da Constituição Federal, não se encontram devidamente preenchidos. 15. Ante o exposto, inadmito o recurso especial. 16. Transitada em julgado, remetam-se os autos ao Juízo de origem para que sejam adotadas as providências cabíveis. Publique-se. Intimem-se. Cumpra-se. Maceió/AL, 29 de agosto de 2022 Desembargador José Carlos Malta Marques Vice-Presidente do Tribunal de Justiça de Alagoas "
            },
            {
                "data": " 24/08/2022 ",
                "movimento": " Enviado para análise do Juízo de Admissibilidade RESP/RE "
            },
            {
                "data": " 22/08/2022 ",
                "movimento": " Juntada de Documento Nº Protocolo: WTRJ.22.70028500-0 Tipo da Petição: Petição Data: 22/08/2022 16:12 "
            },
            {
                "data": " 22/08/2022 ",
                "movimento": " Juntada de Documento Nº Protocolo: WTRJ.22.70028500-0 Tipo da Petição: Petição Data: 22/08/2022 16:12 "
            },
            {
                "data": " 22/08/2022 ",
                "movimento": " Juntada de Petição de Nº Protocolo: WTRJ.22.70028500-0 Tipo da Petição: Petição Data: 22/08/2022 16:12 "
            },
            {
                "data": " 06/06/2022 ",
                "movimento": " Enviado para análise do Juízo de Admissibilidade RESP/RE "
            },
            {
                "data": " 03/06/2022 ",
                "movimento": " Juntada de Petição de Nº Protocolo: WTRJ.22.70018679-6 Tipo da Petição: Contrarrazões Data: 03/06/2022 15:26 "
            },
            {
                "data": " 01/06/2022 ",
                "movimento": " Concluso à Vice - Presidência "
            },
            {
                "data": " 31/05/2022 ",
                "movimento": " Certidão Emitida CONCLUSÃO Faço estes autos conclusos ao Excelentíssimo Senhor Des. José Carlos Malta Marques, Vice - Presidente. Maceió, 30 de maio de 2022 Adriana Mota Alcides Chefe de Gabinete da Vice-Presidência "
            },
            {
                "data": " 30/05/2022 ",
                "movimento": " Interposto Recurso Especial "
            },
            {
                "data": " 30/05/2022 ",
                "movimento": " Realizada Alteração de Relatoria Orgão Julgador Anterior: 2ª Câmara Cível Orgão Julgador Novo: Vice-Presidência Relator Anterior: Des. Otávio Leão Praxedes Relator Novo: Des. José Carlos Malta Marques Motivo da alteração: recurso especial "
            },
            {
                "data": " 30/05/2022 ",
                "movimento": " Processo Redistribuído Antigo órgão julgador: 2ª Câmara Cível Antigo relator: Des. Otávio Leão Praxedes "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Encaminhado para secretaria da Vice-Presidência "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida Apelação Cível nº 0710802-55.2018.8.02.0001 Relator: Des. Otávio Leão Praxedes Apelante : Cony Engenharia Ltda.. Advogado : Carlos Henrique de Mendonça Brandão (6770/AL). Advogada : Maria Eugênia Barreiros de Mello (14717/AL). Advogado : Vítor Reis de Araujo Carvalho (14928/AL). Advogado : Guilherme Freire Furtado (14781/AL). Apelante : Banco do Brasil S A. Advogado : Nelson Wilians Fratoni Rodrigues (9395A/AL). Apelado : José Carlos Cerqueira Souza Filho. Advogado : Vinicius Faria de Cerqueira (9008/AL). Apelada : Livia Nascimento da Rocha. Advogado : Vinicius Faria de Cerqueira (9008/AL) CERTIDÃO DE JUNTADA E REMESSA À SECRETARIA DA VICE-PRESIDÊNCIA Certifico, para os devidos fins, a juntada, nos presentes autos, do(s) incidente(s) de n.º : 0710802-55.2018.8.02.0001/50000 às páginas 776/806. Certifico, ainda, que decorreu o prazo legal sem que as demais partes interpusessem quaisquer incidentes e/ou recursos pertinentes à(o) Decisão/Acórdão retro. Certifico por último que faço remessa, nesta data, à Secretaria da Vice-Presidência, pois a(s) parte(s) Cony Engenharia Ltda. interpôs/interpuseram Recurso Especial às páginas 760/771. O referido é verdade e dou fé. Maceió, 27 de maio de 2022. Carla Christini Barros Costa de Oliveira Secretário(a) da 2ª Câmara Cível Luiz Carlos Maciel Rodrigues Analista Judiciário "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Juntada de Documento "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Juntada de Documento "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Juntada de Petição de "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Juntada de Petição de "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Juntada de Documento "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Juntada de Petição de "
            },
            {
                "data": " 27/05/2022 ",
                "movimento": " Certidão Emitida Apelação Cível nº 0710802-55.2018.8.02.0001 Relator :Des. Otávio Leão Praxedes Apelante: Cony Engenharia Ltda.. Advogado: Carlos Henrique de Mendonça Brandão (OAB: 6770/AL). Advogada: Maria Eugênia Barreiros de Mello (OAB: 14717/AL). Advogado: Vítor Reis de Araujo Carvalho (OAB: 14928/AL). Advogado: Guilherme Freire Furtado (OAB: 14781/AL). Apelante: Banco do Brasil S A. Advogado: Nelson Wilians Fratoni Rodrigues (OAB: 9395A/AL). Apelado: José Carlos Cerqueira Souza Filho. Advogado: Vinicius Faria de Cerqueira (OAB: 9008/AL). Apelada: Livia Nascimento da Rocha. Advogado: Vinicius Faria de Cerqueira (OAB: 9008/AL). CERTIDÃO DE JUNTADA Junto, nesta data, aos presentes autos, os documentos pertinentes ao(s) Incidente(s) n.º 0710802-55.2018.8.02.0001/50000. Maceió,27 de maio de 2022. Carla Christini Barros Costa de Oliveira 2ª Câmara Cível Luiz Carlos Maciel Rodrigues Analista Judiciário "
            },
            {
                "data": " 25/05/2022 ",
                "movimento": " Juntada de Documento Nº Protocolo: WTRJ.22.70016995-6 Tipo da Petição: Recurso Especial Cível Data: 25/05/2022 10:47 "
            },
            {
                "data": " 25/05/2022 ",
                "movimento": " Juntada de Documento Nº Protocolo: WTRJ.22.70016995-6 Tipo da Petição: Recurso Especial Cível Data: 25/05/2022 10:47 "
            },
            {
                "data": " 25/05/2022 ",
                "movimento": " Juntada de Documento Nº Protocolo: WTRJ.22.70016995-6 Tipo da Petição: Recurso Especial Cível Data: 25/05/2022 10:47 "
            },
            {
                "data": " 25/05/2022 ",
                "movimento": " Juntada de Petição de Nº Protocolo: WTRJ.22.70016995-6 Tipo da Petição: Recurso Especial Cível Data: 25/05/2022 10:47 "
            },
            {
                "data": " 22/10/2021 ",
                "movimento": " Juntada de Petição de Protocolo nº WTRJ.2170030289-2 Embargos de Declaração Cível "
            },
            {
                "data": " 22/10/2021 ",
                "movimento": " Incidente Cadastrado Seq.: 50 - Embargos de Declaração Cível "
            },
            {
                "data": " 13/10/2021 ",
                "movimento": " Publicado "
            },
            {
                "data": " 13/10/2021 ",
                "movimento": " Certidão Emitida Apelação Cível nº 0710802-55.2018.8.02.0001 Relator: Des. Otávio Leão Praxedes Apelante: Cony Engenharia Ltda.Advogado: Carlos Henrique de Mendonça Brandão (OAB: 6770/AL)Advogada: Maria Eugênia Barreiros de Mello (OAB: 14717/AL)Advogado: Vítor Reis de Araujo Carvalho (OAB: 14928/AL)Advogado: Guilherme Freire Furtado (OAB: 14781/AL)Apelante: Banco do Brasil S AAdvogado: Nelson Wilians Fratoni Rodrigues (OAB: 9395A/AL)Apelado: José Carlos Cerqueira Souza FilhoAdvogado: Vinicius Faria de Cerqueira (OAB: 9008/AL)Apelada: Livia Nascimento da RochaAdvogado: Vinicius Faria de Cerqueira (OAB: 9008/AL) CERTIDÃO DE DISPONIBILIZAÇÃO DO ACÓRDÃO CERTIFICO, que foi disponibilizado no Diário da Justiça Eletrônico do Tribunal de Justiça de Alagoas em 13/10/2021 e considerado publicado em 14/10/2021 a conclusão do venerando Acórdão julgado em 07/10/2021, nos termos do Artigo 943, § 2º do Código de Processo Civil c/c o artigo 4º, § 3º, da Lei nº 11.419/2006. Maceió/AL, 13 de outubro de 2021 Carla Christini Barros Costa de Oliveira Secretária da 2ª Câmara Cível Gabrielle Wanderley Tenório Cavalcante Analista Judiciário "
            },
            {
                "data": " 07/10/2021 ",
                "movimento": " Conhecido o recurso de Vistos, relatados e discutidos estes autos do Recurso de Apelação Cível nº 0710802-55.2018.8.02.0001, em que figuram, como parte apelante, Cony Engenharia LTDA e Banco do Brasil S/A; e, como parte apelada, José Carlos Cerqueira Souza Filho e Livia Nascimento da Rocha, ACORDAM, os Desembargadores integrantes desta 2ª Câmara Cível do Tribunal de Justiça do Estado de Alagoas, à unanimidade de votos, em CONHECER de ambos os recursos de Apelação Cível; e, no mérito, por idêntica votação, NEGAR-LHES PROVIMENTO, mantendo incólume a Sentença proferida pelo Juízo de Direito de Primeiro Grau. Acordam, ainda, em majorar os honorários advocatícios sucumbenciais para 17% sobre o valor da condenação, nos termos do voto do Relator. Participaram do julgamento os eminentes Desembargadores constantes na Certidão de Julgamento. "
            },
            {
                "data": " 07/10/2021 ",
                "movimento": " Certidão Emitida Certifico que a 2ª Câmara Cível, assim decidiu: à unanimidade de votos, em CONHECER de ambos os recursos de Apelação Cível; e, no mérito, por idêntica votação, NEGAR-LHES PROVIMENTO, mantendo incólume a Sentença proferida pelo Juízo de Direito de Primeiro Grau. Acordam, ainda, em majorar os honorários advocatícios sucumbenciais para 17% sobre o valor da condenação, nos termos do voto do Relator.. Participaram do julgamento: Juiz Conv. Carlos Cavalcanti de Albuquerque Filho, Des. João Luiz Azevedo Lessa, concovado em face das férias da Desa. Elisabeth Carvalho Nascimento e Des. Otávio Leão Praxedes. Presidiu a sessão o Exmo. Senhor Des. Otávio Leão Praxedes. Para constar lavro a presente certidão, do que dou fé. Maceió, 07 de outubro de 2021. Carla Christini Barros Costa de Oliveira Secretária da 2ª Câmara Cível "
            },
            {
                "data": " 07/10/2021 ",
                "movimento": " Processo Julgado à unanimidade de votos, em CONHECER de ambos os recursos de Apelação Cível; e, no mérito, por idêntica votação, NEGAR-LHES PROVIMENTO, mantendo incólume a Sentença proferida pelo Juízo de Direito de Primeiro Grau. Acordam, ainda, em majorar os honorários advocatícios sucumbenciais para 17% sobre o valor da condenação, nos termos do voto do Relator. "
            },
            {
                "data": " 27/09/2021 ",
                "movimento": " Certidão Emitida CERTIDÃO Certifico que o presente processo foi incluído na pauta de julgamento do dia 07 de outubro de 2021 às 9:00h, disponibilizado no Diário de Justiça Eletrônico no dia 27 de setembro de 2021, nos termos dos art. 6º da Resolução n.º 318/20 do CNJ, tendo sido a mesma afixada no mural informativo jurisdicional desta Corte de Justiça. Obs.: Em cumprimento a Resolução n. 13/2020, e ao art 1º do Ato Normativo n. 13/2021 disponibilizado no Diário de Justiça Eletrônico em 07/07/2021, as inscrições para sustentações orais deverão ser feitas EXCLUSIVAMENTE pelo sítio do Tribunal de Justiça (http://sadv.tjal.jus.br/login). Em caso de adiamento do julgamento, o advogado terá que realizar nova inscrição e credenciamento pelo portal. Maceió, 27 de setembro de 2021 Carla Christini Barros Costa de Oliveira Secretária da 2ª Câmara Cível "
            },
            {
                "data": " 24/09/2021 ",
                "movimento": " Inclusão em pauta Para 07/10/2021 "
            },
            {
                "data": " 23/09/2021 ",
                "movimento": " Publicado "
            },
            {
                "data": " 22/09/2021 ",
                "movimento": " Solicitação de dia para Julgamento - Relator DESPACHO Trata-se de dois Recursos de Apelação Cível, o primeiro interposto pelo Banco do Brasil S/A, às págs. 668/689, e o segundo interposto pela Cony Engenharia LTDA, às págs. 693/701, ambos em face da Sentença proferida pelo Juízo de Direito da 4ª Vara Cível da Capital, às págs. 649/663, que julgou parcialmente procedentes os pedidos da Ação Declaratória de Nulidade de Contrato de Financiamento Bancário c/c Indenização por Danos Materiais e Morais proposta por , às págs. 1/30, conforme se pode verificar no dispositivo abaixo transcrito: Forte nessas razões, JULGO PARCIALMENTE PROCEDENTES os pedidos da proemial, julgando extinto o processo com resolução de mérito, nos termos do art. 487, inciso I, do Estatuto Processual emergente, para o fim de CONDENAR AS DEMANDADAS, solidariamente: a) a ressarcir os danos materiais promovidos (lucros cessantes), cujo valor fixo em R$ 1.500,00 (três mil e quinhentos reais), por cada mês de atraso na entrega do imóvel , a incidir desde o dia 1 de agosto de 2017 até a datada efetiva entrega do imóvel, a ser apurada na fase de liquidação da sentença. Ressalto que esses valores deverão ser atualizados monetariamente pelo INPC desde a data em que cada aluguel seria devido, e acrescidos de juros de mora de 1% (um por cento) ao mês, contados da citação (art. 405 do Código Substantivo Civil). Para aqueles que venceram após a data da propositura da demanda, o juros de mora deverá incidir a partir da data de cada inadimplemento, para obstar o enriquecimento sem causa; b) em danos morais de R$ 5.000,00 (cinco mil reais), com juros de mora de 1% (um por cento) ao mês, a partir do dia 1 de agosto de 2017 (art. 397). Correção monetária, pelo INPC, desde a data do arbitramento; c) determino a substituição do índice INCC pelo IGP-M, a partir de 01 de agosto de 2017, e, como corolário, a devolução dos valores pagos a maior, com suas respectivas atualizações, nas mesmas condições do item a, deste dispositivo. Rejeito o pedido de restituição em dobro, por não vislumbrar má-fé dos beneficiários dos pagamentos indevidos. Oportunamente, condeno as demandada ao pagamento das custas e despesas processuais e dos honorários do advogado da parte adversa, que fixo, nos termos do art. 85, §2º, do Código de Processo Civil, e considerada a complexidade da demanda e as intervenções que exigiu, em 15% (quinze por cento) sobre o valor atualizado da condenação. Por fim, de modo a evitar o ajuizamento de embargos de declaração meramente protelatórios, registre-se que, ficam preteridas as demais alegações, por incompatíveis com a linha de raciocínio adotada, observando que os pedidos de ambas as partes foram apreciados nos limites em que foram formulados. Com efeito, ficam as partes advertidas, desde logo, que a oposição de embargos de declaração fora das hipóteses legais e/ou com postulação meramente infringente lhes sujeitará a imposição da multa prevista pelo artigo 1026, §2º, do Código de Processo Civil. Publique-se. Registre-se. Intimem-se. (págs. 661/663 - Sem grifos no original). Em suas razões recursais, o Banco do Brasil S/A aduziu que: i) preliminarmente, é parte ilegítima para figurar no polo passivo da ação de origem, pois é mero agente financeiro e os descontos decorrentes do financiamento só iniciam após o \"habite-se\"; ii) a taxa de evolução de obra, também chamada de juros de obra, é cobrada nos financiamentos na modalidade créditos associativos para aquisição de imóveis na planta, mas o apelante não realiza esse tipo de cobrança, ele cobra apenas encargos adicionais, que correspondem aos juros devidos, tanto no período em que o imóvel ainda está na planta, quanto após o início do pagamento da parcela de amortização de capital; iii) a cobrança da referida taxa só se inicia após o \"habite-se\"; iii) o apelante não tem como acompanhar a evolução das milhares de obra que financia, cabendo à construtora comprovar que o \"habite-se\" foi liberado pela Prefeitura; iv) caso a apelada tivesse levado a cópia do \"habite-se\" à instituição financeira, o encargo já não seria mais cobrado; v) deve-se respeitar o princípio do pacta sunt servanda, pois o apelante apenas cumpriu o que foi determinado em contrato; vi) inexiste dever de indenizar, ante a ausência da prática de ato ilícito; e, vii) em caso de condenação ao pagamento de indenização por danos morais, o valor arbitrado não pode ensejar enriquecimento ilícito. Ao final, requereu o conhecimento e o provimento do presente Recurso de Apelação Cível, a fim de reformar a Sentença proferida pelo Juízo de Direito de Primeiro Grau, no sentido de julgar improcedentes os pedidos autorais; e, subsidiariamente, reduzir o valor arbitrado a título de indenização por danos morais. Por sua vez, a Cony Engenharia LTDA alegou que: i) a parte apelada sustenta que houve atraso na entrega de uma unidade imobiliária do empreendimento Dellavia Park Club; ii) o Juízo a quo entendeu que o atraso na entrega do imóvel seria incontroverso, o que necessariamente implicaria que a parte apelada teria deixado de auferir lucros a título de alugueis no período; iii) a presunção adotada pelo Juízo a quo de que o atraso na entrega do imóvel implica danos materiais, mais especificamente na modalidade de lucros cessantes, não é absoluta; iv) na petição inicial, a parte apelada afirma que o imóvel foi adquirido para sua própria moradia, de modo que nunca houve intenção de locação nem de auferir renda com o bem; v) as provas dos autos não deixam dúvidas sobre a finalidade de moradia da parte apelada e, por consequência, os supostos danos são meramente hipotéticos e sem correspondência com a realidade dos fatos; vi) o contrato de promessa de compra e venda foi celebrado unicamente pelo Sr. José Carlos Cerqueira, de modo que não há que se falar em danos morais à Sra. Livia Nascimento, já que não figurou como parte contratante com a empresa; vii) em relação aos supostos danos morais causados ao Sr. José Carlos Cerqueira, não houve violação a qualquer direito da personalidade; e vii) é válida a cláusula de tolerância de dezoito meses pactuada entre as partes e a aplicabilidade do INCC à correção do saldo devedor, não devendo prevalecer o entendimento do Juízo a quo pelo limite de tolerância de apenas cento e oitenta dias nem a substituição do índice pelo IGP-M para correção do saldo devedor. Por derradeiro, requereu o conhecimento e o provimento do presente Recurso de Apelação Cível, a fim de reformar a Sentença proferida pelo Juízo de Direito de Primeiro Grau, no sentido de julgar improcedentes os pedidos autorais; e, subsidiariamente, adotar a data de agosto de 2018 como referência para eventuais cálculos devidos e manter o INCC para correção do saldo devedor. Intimada a apresentar contrarrazões, a parte apelada alegou que: i) a preliminar de ilegitimidade passiva do Banco do Brasil S/A não merece prosperar, pois a presente lide diz respeito a negócios jurídicos diretamente ligados à instituição financeira, como a abusividade do contrato de financiamento, nulidade de cláusulas de financiamento e devolução das taxas de obra ilegalmente cobradas; a construtora não alegou em momento oportuno a preliminar de ilegitimidade passiva da Sra. Lívia Nascimento, sendo irrelevante qualquer argumento nesse sentido em sede recursal, por mais que o dano tenha sido evidenciado em razão da privação do bem sofrida juntamente com seu marido por tempo além do razoável; ii) a construtora só poderia fazer prova de que a mora contratual não lhe é imputável, mas não o fez; iii) os anos de espera e de expectativas, de frustrações, de chateações, de descontentamentos, discussões, mentiras e novas frustrações são suficientes para comprovar o dano moral; iv) a cláusula de tolerância de dezoito meses prevista no contrato afronta a jurisprudência do Superior Tribunal de Justiça, que já limitou o prazo de cento e oitenta dias; e v) o inadimplemento dos réus, em razão do atraso na entrega do imóvel, não pode gerar acréscimo ao saldo devedor, sob pena de onerar indevidamente o consumidor, pois transferiria os encargos da mora a quem não deu causa e mais, remunerando a construtora/incorporadora pelo próprio inadimplemento. Por fim, requereu o não provimento do Recurso de Apelação Cível, mantendo incólume a Sentença proferida pelo Juízo de Direito de Primeiro Grau, apenas majorando os honorários advocatícios sucumbenciais. É, em síntese, o relatório. Estando o processo em ordem, peço inclusão na pauta de julgamento subsequente. Maceió, 22 de setembro de 2021 Des. Otávio Leão Praxedes Relator "
            },
            {
                "data": " 22/07/2021 ",
                "movimento": " Juntada de Petição de Nº Protocolo: WTRJ.21.70018896-8 Tipo da Petição: Petição Data: 22/07/2021 16:32 "
            },
            {
                "data": " 25/05/2021 ",
                "movimento": " Juntada de Petição de Nº Protocolo: WTRJ.21.70013501-5 Tipo da Petição: Petição Cível Data: 25/05/2021 10:29 "
            },
            {
                "data": " 22/02/2021 ",
                "movimento": " Concluso ao Relator "
            },
            {
                "data": " 22/02/2021 ",
                "movimento": " Termo de Distribuição Emitido "
            },
            {
                "data": " 22/02/2021 ",
                "movimento": " Processo Distribuído por Sorteio Órgão Julgador: 2 - 2ª Câmara Cível Relator: 86 - Des. Otávio Leão Praxedes "
            },
            {
                "data": " 22/02/2021 ",
                "movimento": " Processo Cadastrado "
            },
            {
                "data": " 22/02/2021 ",
                "movimento": " Recebidos os Autos pela Entrada de Recursos Foro de origem: Foro de Maceió Vara de origem: 4ª Vara Cível da Capital "
            }
        ]
    }};
     // jest.spyOn(service, 'getDataInstances').mockResolvedValue(expectedResult);

      const result = await controller.getProcessDetails(processNumber);
      expect(result).toEqual(expectedResult);
    }, 600000);

    it('should throw NotFoundException if process not found', async () => {
      const processNumber = '0070337-91.2008.8.06.0001';
     // jest.spyOn(service, 'getDataInstances').mockResolvedValue(null);
      try {
        await controller.getProcessDetails(processNumber);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual(`Processo com número ${processNumber} não encontrado`);
      }
    }, 600000);
  });
});

