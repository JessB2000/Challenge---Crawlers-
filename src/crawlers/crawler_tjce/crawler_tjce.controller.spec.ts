import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerTjceController } from './crawler_tjce.controller';
import { CrawlerTjceService } from './crawler_tjce.service';
import { CrawlerTjceModule } from './crawler_tjce.module';
import { FirstInstanceCEModule } from './utils/firstInstance.module';
import { SecondInstanceCEModule } from './utils/secondInstance.module';
import { FirstInstanceCE } from './utils/fistInstance';
import { SecondInstanceCE } from './utils/secondInstance';
import { NotFoundException } from '@nestjs/common';

describe('CrawlerTjceController', () => {
  let controller: CrawlerTjceController;
  let service: CrawlerTjceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CrawlerTjceModule, FirstInstanceCEModule, SecondInstanceCEModule],
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
      const processNumber = '0070337-91.2008.8.06.0001';
      const expectedResult = { "primeiraInstancia": {
        "numero": " 0070337-91.2008.8.06.0001 ",
        "classe": "Ação Penal - Procedimento Ordinário",
        "area": " Criminal",
        "dataDistribuicao": "02/05/201",
        "valorAcao": "",
        "partesProcesso": [
            {
                "pessoa": "Vítima ",
                "envolvidos": "G. de O. C. "
            },
            {
                "pessoa": "Vítima ",
                "envolvidos": "A. S. F. "
            },
            {
                "pessoa": "Autor ",
                "envolvidos": "Ministério Público do Estado do Ceará "
            },
            {
                "pessoa": "Terceiro ",
                "envolvidos": "Departamento de Tecnologia da Informação e Comunicação - DETIC (Polícia Civil) "
            },
            {
                "pessoa": "Testemunha ",
                "envolvidos": "M. L. S. I. "
            }
        ],
        "movimentacoesLista": [
            {
                "data": "16/08/2022",
                "movimento": "Juntada de OfícioNº Protocolo: WEB1.22.02299977-0Tipo da Petição: OfícioData: 16/08/2022 12:49"
            },
            {
                "data": "16/09/2021",
                "movimento": "Juntada de Aviso de Recebimento (AR)"
            },
            {
                "data": "10/09/2021",
                "movimento": " Expedição de Certidão de Arquivamento"
            },
            {
                "data": "10/09/2021",
                "movimento": "Arquivado Definitivamente"
            },
            {
                "data": "06/09/2021",
                "movimento": "Juntada de documento"
            },
            {
                "data": "31/08/2021",
                "movimento": "Juntada de documento"
            },
            {
                "data": "27/08/2021",
                "movimento": " Expedição de Ofício"
            },
            {
                "data": "26/08/2021",
                "movimento": " Proferido despacho de mero expedienteVistos em inspeção anual interna (Portaria nº 01/2021, DJe nº 2679, p. 8, em 20/08/2021) Cumpra-se a determinação contida no item III do despacho de página 556, expedindo-se ofício ao DETRAN para comunicar a proibição imposta ao réu para dirigir veículo automotor no período assinalado, bem como para encaminhar o documento retido, conforme consta na certidão de página 571. Expediente necessário."
            },
            {
                "data": "26/08/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "26/08/2021",
                "movimento": "Processo Desarquivado"
            },
            {
                "data": "25/08/2021",
                "movimento": "Juntada de Carta Precatória/Rogatória"
            },
            {
                "data": "23/08/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "26/05/2021",
                "movimento": " Expedição de Certidão de Arquivamento"
            },
            {
                "data": "26/05/2021",
                "movimento": "Arquivado Definitivamente"
            },
            {
                "data": "26/05/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "26/05/2021",
                "movimento": " Expedição de Ato OrdinatórioComunico ao Departamento de Tecnologia da Informação e Comunicação da Polícia Civil do Estado do Ceará - DETIC, para fins de registros nos sistemas policiais, o seguinte: Nome do juiz(a): Silvio Pinto Falcão Filho Nome(s) do infrator/réu(s): William Azevedo dos Santos, WILLIAM AZEVEDO DOS SANTOS, brasileiro, Casado, pai Francisco das Chagas Santos, mãe Vaneide Azevedo dos Santos, Nascido/Nascida em 03/06/1984, natural de Tucurui - PA, com endereço à Rua Raimundo Félix, 24, Alto Alegre, CEP 62880-000, Horizonte - CE Número do Inquérito Policial: 196/2007 Motivo : Condenação transitada em julgado. Data da Sentença: 29/03/2016 Se condenatória (Informar artigo e pena, tipo de pena e regime): Art. 302 § 1º, II do(a) LEI 9.503/1997. Pena de dois anos e oito meses de detenção Regime inicial: aberto, a ser cumprido na Casa do Albergado. Substituição da pena privativa de liberdade por privativa de direito consistentes em prestação pecuniária e prestação de serviço à comunidade. A prestação pecuniária consistirá no pagamento de R$ 4.000,00 (quatro mil reais), dividido em duas parcelas de R$ 2.000,00 (dois mil reais), corrigidos monetariamente desde a data do arbitramento pelo INPC, a primeira em trinta dias do trânsito em julgado e a segunda no mesmo dia do mês seguinte. Data do Trânsito em Julgado: 12.04.2020"
            },
            {
                "data": "19/04/2021",
                "movimento": "Remessa dos autos à Vara de Origem"
            },
            {
                "data": "19/04/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "19/04/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "19/04/2021",
                "movimento": "Juntada de documento"
            },
            {
                "data": "07/04/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "07/04/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "07/04/2021",
                "movimento": "Juntada de Ofício"
            },
            {
                "data": "06/04/2021",
                "movimento": "Juntada de documento"
            },
            {
                "data": "31/03/2021",
                "movimento": " Expedida carta precatória"
            },
            {
                "data": "31/03/2021",
                "movimento": " Certidão emitida"
            },
            {
                "data": "29/03/2021",
                "movimento": " Proferido despacho de mero expedienteVistos em conclusão. I - Considerando o teor do decisório de págs. 544/550, que transitou em julgado em 12/05/2020 (pág. 553), atualize-se o histórico do apenado WILLIAM AZEVEDO DOS SANTOS no sistema SAJPG. II - Comunique-se ao T.R.E (artigo 71, § 2º, do Código Eleitoral, c/c o art. 15, III, da Constituição Federal), através do Sistema Pólis. III Intime-se o sentenciado, por mandado, para entregar a carteira de habilitação no Gabinete deste Juízo, no prazo de 05 (cinco) dias, após o retorno do atendimento presencial no Fórum. Após a entrega da CNH, oficie-se o DETRAN comunicando a proibição imposta ao réu para dirigir veículo automotor no período assinalado, bem como para encaminhar o documento retido. IV- Expeça-se Carta de Guia à Vara de Execução de Penas Alternativas. V Após o cumprimento das providências acima ordenadas, arquivem-se os presentes autos. Expedientes necessários."
            },
            {
                "data": "15/05/2020",
                "movimento": "Concluso para Despacho"
            },
            {
                "data": "14/05/2020",
                "movimento": "Certificação de Processo JulgadoProcesso devolvido do SG."
            },
            {
                "data": "14/05/2020",
                "movimento": "Recebido Recurso EletrônicoData do julgamento: 21/05/2018 13:46:48Tipo de julgamento: Decisão monocráticaDecisão: Ante o exposto, com base no art. 1.030, inciso V, do CPC, admito o recurso especial. Expedientes necessários. Fortaleza, 18 de maio de 2018. Desembargador WASHINGTON LUÍS BEZERRA DE ARAÚJO Vice-Presidente do TJCERelatora: MARIA DAS GRAÇAS ALMEIDA DE QUENTAL-PORT.723/2018"
            },
            {
                "data": "02/05/2018",
                "movimento": "Processo Redistribuído por Sorteiores 06/2018"
            },
            {
                "data": "01/05/2018",
                "movimento": "Remetidos os Autos para o Distribuidor Local"
            },
            {
                "data": "01/05/2018",
                "movimento": " Certidão emitida"
            },
            {
                "data": "27/04/2018",
                "movimento": "Remessa dos Autos para fins de Redistribuição"
            },
            {
                "data": "17/04/2018",
                "movimento": " Certidão emitida"
            },
            {
                "data": "26/06/2017",
                "movimento": " Certidão emitida"
            },
            {
                "data": "14/09/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "14/09/2016",
                "movimento": "Juntada de Ofício"
            },
            {
                "data": "01/09/2016",
                "movimento": "Remetido Recurso Eletrônico ao Tribunal de Justiça"
            },
            {
                "data": "01/09/2016",
                "movimento": "Juntada de Carta Precatória/Rogatória"
            },
            {
                "data": "01/09/2016",
                "movimento": "Juntada de documento"
            },
            {
                "data": "25/08/2016",
                "movimento": "Juntada de documento"
            },
            {
                "data": "25/08/2016",
                "movimento": " Expedição de Ofício"
            },
            {
                "data": "24/08/2016",
                "movimento": " Proferido despacho de mero expedienteSolicite-se o cumprimento da carta precatória de pág. 281 por intermédio da Corregedoria Geral da Justiça do Estado do Ceará. Oficie-se para essa finalidade."
            },
            {
                "data": "23/08/2016",
                "movimento": "Concluso para Despacho"
            },
            {
                "data": "23/08/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "18/08/2016",
                "movimento": "Juntada de PetiçãoNº Protocolo: WEB1.16.10377382-2Tipo da Petição: Pedido de Juntada de DocumentoData: 17/08/2016 18:29"
            },
            {
                "data": "09/08/2016",
                "movimento": "Juntada de PetiçãoNº Protocolo: WEB1.16.10361896-7Tipo da Petição: RECURSO DE APELAÇÃOData: 08/08/2016 18:17"
            },
            {
                "data": "28/06/2016",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/06/2016",
                "movimento": " Expedição de Ofício"
            },
            {
                "data": "23/06/2016",
                "movimento": " Proferido despacho de mero expedienteVisto em inspeção ordinária - Portaria nº 01/2016.Oficie-se ao Juízo deprecado solicitando o cumprimento da carta precatória, no prazo de trinta(30) dias.."
            },
            {
                "data": "13/05/2016",
                "movimento": "Juntada de PetiçãoNº Protocolo: WEB1.16.10209425-5Tipo da Petição: Contrarrazões RecursaisData: 13/05/2016 19:17"
            },
            {
                "data": "26/04/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "15/04/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "14/04/2016",
                "movimento": " Recebido o recurso Com efeito suspensivoRecebo a apelação de pág. 301/320 no efeito suspensivo. Dê-se vista dos autos à representante ministerial para apresentar suas contrarrazões, no prazo de 08 (oito) dias.Apresentadas ou transcorrido o prazo, e devolvido o mandado de intimação do réu, sigam os autos ao TJ/CE."
            },
            {
                "data": "14/04/2016",
                "movimento": "Concluso para Decisão Interlocutória"
            },
            {
                "data": "13/04/2016",
                "movimento": "Juntada de PetiçãoNº Protocolo: WEB1.16.10158782-7Tipo da Petição: RECURSO DE APELAÇÃOData: 13/04/2016 20:11"
            },
            {
                "data": "09/04/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "09/04/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "06/04/2016",
                "movimento": "Juntada de documento"
            },
            {
                "data": "29/03/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "29/03/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "29/03/2016",
                "movimento": " Embargos de Declaração Não-acolhidosCuida-se de embargos declaratórios manejados pela defesa do réu WILLIAM AZEVEDO DOS SANTOS, respaldado no artigo 382 do CPP. Conforme previsão do artigo 620 do CPP os embargos de declaração serão deduzidos em requerimento onde constem os pontos em que a sentença é ambígua, obscura, contraditória ou omissa, de modo a distingui-los do inconformismo próprio da apelação.Da petição que interpõe o embargo não há como identificar quais os argumentos que o postulante reputa vícios da sentença, pois ora narra que houve problemas de formação, acreditando tratar-se de arquivo corrompido, ora alega ausência de fundamentação e de justificativa na prolação do decreto condenatório. A sentença apresentada é sintética, abandona a disposição analítica, sem que isso represente afronta à indicação do CPP. A apresentação sintética, dividida por tópicos, reproduz a complexidade própria dos crimes de trânsito, sem comprometer qualquer dos seus requisitos essenciais. A solução do processo volta-se prioritariamente para agilidade e objetividade na exposição dos fatos, fundamento e dispositivo. No presente caso não há qualquer argumento de acusação, ou defesa, que tenha deixado de ser mencionado e apreciado circunstanciadamente. A vinculação a fórmulas não é capaz de oferecer resposta consentânea com as modernas exigências a que o Judiciário é desafiado: agilidade, clareza e segurança. O protagonismo desse processo deve ser compartilhado por todos que integram o sistema de justiça. Nesse sentido, é muito importante a crítica que surge da iniciativa recursal, desde que hábil a indicar que as deficiências da nova fórmula que merecem aprimoramento. O artigo 381 do CPP indica o conteúdo obrigatório da sentença como sendo: nomes das partes; exposição sucinta da acusação e da defesa; a indicação dos motivos de fato e de direito em que se fundar a decisão; a indicação dos artigos de lei aplicados; o dispositivo; data e a assinatura do juiz. O embargo não identifica a omissão ou insuficiência de qualquer deles, limita-se a imputar falta fundamentação, sem indicar qual argumento da acusação ou defesa que não foi apreciado fundamentadamente, para que a omissão possa ser suprida.Os embargos de declaração excepcionam a regra geral dos recursos, pois a sua interposição não visa necessariamente a reforma da decisão recorrida, mas à supressão de vício ou defeito que comprometa a compreensão do ato decisório.Desse modo, não havendo omissão capaz de admitir a oposição de embargos declaratórios, cumpre reconhecer a inadequação da pretensão veiculada pelo embargante, ante a ausência de pressuposto recursal, sendo impróprio o seu uso como sucedâneo da apelação ou como forma de exercitar efeito regressivo estranho à modalidade recursal eleita, contrariando à logica processual e os fins pretendidos pela norma vigente.Ante o exposto, rejeito os embargos declaratórios manejados pela defesa, em razão da ausência de pressuposto processual intrínseco ao recebimento do recurso, previsto no art. 620 do Código de Processo Penal, não há obscuridade, ambigüidade, contradição ou omissão a ser suprida.Intimem-se as partes. Prazo recursal interrompido apenas para a defesa. Intime-se para recontagem."
            },
            {
                "data": "25/03/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "22/03/2016",
                "movimento": "Concluso para Decisão Interlocutória"
            },
            {
                "data": "22/03/2016",
                "movimento": "Juntada de PetiçãoNº Protocolo: WEB1.16.10122590-9Tipo da Petição: Embargos de DeclaraçãoData: 21/03/2016 22:08"
            },
            {
                "data": "22/03/2016",
                "movimento": "Processo entranhadoEntranhado o processo 0070337-91.2008.8.06.0001/01 - Classe: Embargos de Declaração em Ação Penal - Procedimento Ordinário - Assunto principal: Crimes de Trânsito"
            },
            {
                "data": "22/03/2016",
                "movimento": "Recurso interpostoSeq.: 01 - Embargos de Declaração"
            },
            {
                "data": "17/03/2016",
                "movimento": " Expedida carta precatória"
            },
            {
                "data": "14/03/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "14/03/2016",
                "movimento": " Certidão emitida"
            },
            {
                "data": "10/03/2016",
                "movimento": " Julgado procedente o pedidoDISPOSITIVO Condeno o réu. Circunstâncias judiciais:Nenhuma digna de menção Pena base: dois anos de detenção Aumento: Um terço em razão da majorante prevista no art. 302, § 1º, II da Lei 9.503/97 Pena Final:dois anos e oito meses de detenção Regime inicial: aberto, a ser cumprido na Casa do Albergado. Valor mínimo para reparação dos danos causados pela infração, considerando os prejuízos sofridos pelo ofendido artigo 387, IV do CPP: R$ 4.000,00 (quatro mil reais) com pagamento até dez dias após o trânsito em julgado. Após isso acrescer 50% Suspensão ou de proibição de se obter a permissão ou a habilitação para dirigir veículo automotor, previsto no artigo 293 do CTB: nove meses (se houver morte), seis (lesão corporal). A pena privativa de liberdade não é superior a quatro anos, o crime é culposo e o réu não é reincidente em crime doloso. A culpabilidade, os antecedentes, a conduta social e a personalidade do condenado, bem como os motivos e as circunstâncias indicam que a substituição da pena privativa de liberdade por privativa de direito consistentes em prestação pecuniária e prestação de serviço à comunidade. A última poderá ser substituída por limitação de fim de semana (art. 48 do CPP), a critério do juiz da execução. A prestação pecuniária consistirá no pagamento de R$ 4.000,00 (quatro mil reais), dividido em duas parcelas de R$ 2.000,00 (dois mil reais), corrigidos monetariamente desde a data do arbitramento pelo INPC, a primeira em trinta dias do trânsito em julgado e a segunda no mesmo dia do mês seguinte, depositados na conta-corrente nº 5873-4 da agência 3515-7 do Banco do Brasil, em benefício do INSTITUTO DO CORAÇÃO DA CRIANÇA E DO ADOLESCENTE - INCOR CRIANÇA, localizado na r. Núbia Barrocas n° 125 Parque Manibura Fortaleza-CE | CEP: 60.821-775, fone: (85) 3492-9400 / (85) 3492-9401 / (85) 3492-9402. O(A) réu(ré) deverá apresentar os comprovantes de depósito mensalmente, tão logo efetue o pagamento, desde já advertido(a) que a transposição de cinco dias da data limite para pagamento de qualquer parcela, sem justificativa, será tida por descumprimento da obrigação e poderá importar na retomada da pena privativa de liberdade substituída. A prestação de serviço à comunidade deverá ser realizada gratuitamente, de acordo com suas aptidões, por prazo igual ao fixado para a pena privativa de liberdade, à razão de uma hora de tarefa por dia de condenação, fixadas de modo a não prejudicar a jornada normal de trabalho, preferencialmente junto à PEFOCE, ou qualquer outro órgão direta ou indiretamente ligado com o trânsito (IML, AMC, DETRAN), de modo a aproximar o(a) réu(ré) das repercussões dos crimes de trânsito. Outro destino poderá ser especificado pelo Juiz das execuções penais competente. O acompanhamento no cumprimento das penas alternativas incumbirá ao juízo da execução criminal competente, para onde deverá ser encaminhada carta de guia. Fica desde logo determinada a conversão da pena restritiva de direitos em privativa de liberdade (art. 44 § 4º do CPB) quando ocorrer o descumprimento e o condenado não apresentar justificativa nos cinco dias que se seguirem, independente de intimação. Após o trânsito em julgado: Réu(ré) Entrega da carteira de habilitação no prazo de cinco dias na secretaria da vara. A transposição desse prazo sem a providência determinada será tida como suficiente para inviabilizar a fruição do benefício da substituição da pena privativa de liberdade por restritiva de direito. Vítima ou familiares Possibilidade de executar a sentença no juízo cível, sem prejuízo da apuração do dano efetivamente sofrido em ação autônoma (art. 63 parágrafo único do CPP). Secretaria Após entregue a CNH, oficiar o DETRAN comunicando a proibição imposta a(o) ré(u) para dirigir veículo automotor no período assinalado, bem como para encaminhar o documento retido. Transposto o prazo sem entrega ou justificativa, desconsiderar a pena substitutiva. Suspender direitos políticos ativos e passivos do réu, (art. 15, II CF/88). Expedir carta de guia ao juízo da execução. Arquivamento com baixa."
            },
            {
                "data": "03/03/2016",
                "movimento": "Concluso para Sentença"
            },
            {
                "data": "03/03/2016",
                "movimento": "Juntada de PetiçãoNº Protocolo: WEB1.16.10092085-9Tipo da Petição: MemoriaisData: 03/03/2016 09:58"
            },
            {
                "data": "19/11/2015",
                "movimento": " Certidão emitida"
            },
            {
                "data": "19/11/2015",
                "movimento": "Juntada de documento"
            },
            {
                "data": "01/04/2015",
                "movimento": "Certidão com o Recebimento da Intimação Pessoal do Defensor"
            },
            {
                "data": "15/10/2014",
                "movimento": "Juntada de PetiçãoNº Protocolo: WEB1.14.71565572-1Tipo da Petição: MemoriaisData: 15/10/2014 18:11"
            },
            {
                "data": "10/10/2014",
                "movimento": "Juntada de Carta Precatória/RogatóriaNº Protocolo: PROT.14.01353297-0Tipo da Petição: Retorno de Carta PrecatóriaData: 06/10/2014 12:54Complemento: Acompanha mídia original(CD)."
            },
            {
                "data": "17/07/2014",
                "movimento": "Juntada de Ofício"
            },
            {
                "data": "13/06/2014",
                "movimento": " Decorrido prazo"
            },
            {
                "data": "05/05/2014",
                "movimento": "Juntada de Ofício"
            },
            {
                "data": "15/04/2014",
                "movimento": "Juntada de Aviso de Recebimento (AR)"
            },
            {
                "data": "26/02/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "20/02/2014",
                "movimento": " Expedida carta precatória"
            },
            {
                "data": "13/02/2014",
                "movimento": " Expedição de Termo de Audiência"
            },
            {
                "data": "10/02/2014",
                "movimento": " Expedição de Termo"
            },
            {
                "data": "04/02/2014",
                "movimento": "Juntada de mandado"
            },
            {
                "data": "30/01/2014",
                "movimento": "Juntada de mandado"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de mandado"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de Parecer do Ministério Público"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de Petição"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de Petição"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de mandado"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de Aviso de Recebimento (AR)"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de Petição"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de Denúncia"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "28/01/2014",
                "movimento": "Juntada de documento"
            },
            {
                "data": "27/11/2013",
                "movimento": "Audiência de instrução e julgamento designadaAUDIÊNCIA DE INSTRUÇÃO E JULGAMENTO DESIGNADA DATA DA AUDIENCIA: 04/02/2014HORA DA AUDIENCIA: 11:20 - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "29/07/2013",
                "movimento": "Juntada de documentoJUNTADA DE DOCUMENTO TIPO DE DOCUMENTO: DESPACHO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "24/07/2013",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "24/07/2013",
                "movimento": "Juntada de documentoJUNTADA DE DOCUMENTO TIPO DE DOCUMENTO: PARECER MP - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "24/07/2013",
                "movimento": "Recebidos os autosRECEBIDOS OS AUTOS DE QUEM: MPPROVENIENTE DE : CARGA/VISTA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "11/07/2013",
                "movimento": "Autos entregues com carga/vista ao ministério públicoAUTOS ENTREGUES COM CARGA/VISTA AO MINISTÉRIO PÚBLICO NOME DO DESTINATÁRIO: DRA. MARIA DO CARMOFUNCIONARIO: NEHYSE LIMANO. DAS FOLHAS: 00DATA INICIAL DO PRAZO: 11/07/2013 - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "20/05/2013",
                "movimento": "Autos entregues com carga/vista ao ministério públicoVISTA P/ CIÊNCIA DO MP - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "20/05/2013",
                "movimento": "Juntada de documentoJUNTADA DE DOCUMENTO TIPO DE DOCUMENTO: DESPACHO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "17/05/2013",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "17/05/2013",
                "movimento": "Juntada de documentoJUNTADA DE DOCUMENTO TIPO DE DOCUMENTO: PARECER DEFENSOR PUBLICO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "17/05/2013",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "17/05/2013",
                "movimento": "Juntada de documentoJUNTADA DE DOCUMENTO TIPO DE DOCUMENTO: PARECER DEFENSOR PUBLICO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "17/05/2013",
                "movimento": "Recebidos os autosRECEBIDOS OS AUTOS DE QUEM: DEFENSOR PUBLICOPROVENIENTE DE : CARGA/VISTA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "14/05/2013",
                "movimento": "Autos entregues com carga/vista ao defensor públicoAUTOS ENTREGUES COM CARGA/VISTA AO DEFENSOR PÚBLICO NOME DO DESTINATÁRIO: DR. ATHILA BEZERRA FUNCIONARIO: NEHYSE LIMANO. DAS FOLHAS: 00DATA INICIAL DO PRAZO: 14/05/2013DATA FINAL DO PRAZO: 19/05/2013 - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "28/08/2012",
                "movimento": "Juntada de documentoJUNTADA DE DOCUMENTO TIPO DE DOCUMENTO: DESPACHO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "23/08/2012",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO COM RESPOSTA Á ACUSAÇÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "23/08/2012",
                "movimento": "Recebidos os autosRECEBIDOS OS AUTOS DE QUEM: DEFENSOR PUBLICOPROVENIENTE DE : CARGA/VISTA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "21/08/2012",
                "movimento": "Autos entregues com carga/vista ao defensor públicoAUTOS ENTREGUES COM CARGA/VISTA AO DEFENSOR PÚBLICO NOME DO DESTINATÁRIO: Dr LinoFUNCIONARIO: albertoNO. DAS FOLHAS: 95DATA INICIAL DO PRAZO: 22/08/2012DATA FINAL DO PRAZO: 26/08/2012 - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "10/07/2012",
                "movimento": "Entrada de petição de acompanhamentoENTRADA DE PETIÇÃO DE ACOMPANHAMENTO Objeto Peticao : - Local Entrada :SERVIÇO DE PORTARIA DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA ( COMARCA DE FORTALEZA ) - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "19/12/2011",
                "movimento": "Expedição de documentoEXPEDIÇÃO DE DOCUMENTO TIPO DE DOCUMENTO: CARTA PRECATÓRIA ENVIAR - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "16/12/2011",
                "movimento": "Expedição de documentoEXPEDIÇÃO DE DOCUMENTO TIPO DE DOCUMENTO: OFÍCIO SELAR EXPEDIENTES - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "28/11/2011",
                "movimento": "Expedição de documentoEXPEDIÇÃO DE DOCUMENTO TIPO DE DOCUMENTO: MANDADO DE CITAÇÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "16/11/2011",
                "movimento": "AutuaçãoAUTUAÇÃO DOCUMENTO ATUAL: DENÚNCIA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "31/10/2011",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO COM DENÚNCIA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "31/10/2011",
                "movimento": "Recebidos os autosRECEBIDOS OS AUTOS DE QUEM: MPPROVENIENTE DE : CARGA/VISTA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "31/10/2011",
                "movimento": "Recebida a denúnciaRECEBIDA A DENÚNCIA Inquerito transformado em Processo - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "24/10/2011",
                "movimento": "Autos entregues com carga/vista ao ministério públicoAUTOS ENTREGUES COM CARGA/VISTA AO MINISTÉRIO PÚBLICO NOME DO DESTINATÁRIO: DR. BRUNO JORGEFUNCIONARIO: MARTA ESDRASNO. DAS FOLHAS: 1DATA INICIAL DO PRAZO: 24/10/2011 - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "23/09/2011",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "22/06/2011",
                "movimento": "Remessa dos autosREMESSA DOS AUTOS DESTINO: À DELEGACIA 8º DP - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "23/05/2011",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO DILIGÊNCIAS - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "21/03/2011",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "16/03/2011",
                "movimento": "Entrada de petição de acompanhamentoENTRADA DE PETIÇÃO DE ACOMPANHAMENTO Objeto Peticao : - Local Entrada :SERVIÇO DE PORTARIA DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA ( COMARCA DE FORTALEZA ) - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "28/02/2011",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "18/06/2010",
                "movimento": "Remessa dos autosREMESSA DOS AUTOS DESTINO: À DELEGACIA 8º DP - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "07/06/2010",
                "movimento": "Expedição de documentoEXPEDIÇÃO DE DOCUMENTO TIPO DE DOCUMENTO: OFÍCIO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "27/05/2010",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "27/05/2010",
                "movimento": "Recebidos os autosRECEBIDOS OS AUTOS DE QUEM: MPPROVENIENTE DE : CARGA/VISTA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "27/05/2010",
                "movimento": "Recebidos os autosRECEBIDOS OS AUTOS DE QUEM: MPPROVENIENTE DE : CARGA/VISTA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "27/05/2010",
                "movimento": "Recebidos os autosRECEBIDOS OS AUTOS DE QUEM: MPPROVENIENTE DE : CARGA/VISTA - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "17/05/2010",
                "movimento": "Autos entregues com carga/vista ao ministério públicoAUTOS ENTREGUES COM CARGA/VISTA AO MINISTÉRIO PÚBLICO NOME DO DESTINATÁRIO: DR. BRUNO JORGEFUNCIONARIO: MARTA ESDRASNO. DAS FOLHAS: 2DATA INICIAL DO PRAZO: 17/05/2010 - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "17/03/2009",
                "movimento": "Redistribuição por encaminhamentoREDISTRIBUIÇÃO POR ENCAMINHAMENTO Distribuído automaticamente conforme provimento nº04/2009 circulado no Diário da Justiça em 22/01/2009. Motivo: TRANSFORMAÇÃO 1ª VARA DO TRÂNSITO EM VARA ÚNICA DO TRÂNSITO - Local: VARA ÚNICA DE TRÂNSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "10/03/2009",
                "movimento": "Entrada de petição de acompanhamentoENTRADA DE PETIÇÃO DE ACOMPANHAMENTO Objeto Peticao : - Local Entrada :SERVIÇO DE PORTARIA DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA ( COMARCA DE FORTALEZA ) - Local: 1ª VARA DE TRANSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "27/02/2009",
                "movimento": "Entrada de petição de acompanhamentoENTRADA DE PETIÇÃO DE ACOMPANHAMENTO Objeto Peticao : - Local Entrada :SERVIÇO DE PORTARIA DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA ( COMARCA DE FORTALEZA ) - Local: 1ª VARA DE TRANSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "20/02/2009",
                "movimento": "Remessa dos autosREMESSA DOS AUTOS DESTINO: 8º DP. p/ diligências - Local: 1ª VARA DE TRANSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "09/02/2009",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO - Local: 1ª VARA DE TRANSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "19/01/2009",
                "movimento": "Autos entregues com carga/vista ao ministério públicoAUTOS ENTREGUES COM CARGA/VISTA AO MINISTÉRIO PÚBLICO NOME DO DESTINATÁRIO: DR. BRUNO JORGEFUNCIONARIO: MARTA ESDRASNO. DAS FOLHAS: 31DATA INICIAL DO PRAZO: 19/01/2009 - Local: 1ª VARA DE TRANSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "16/01/2009",
                "movimento": "Concluso ao juizCONCLUSO AO JUIZ TIPO DE CONCLUSÃO: DESPACHO/DECISÃO vindos do 8º DP - Local: 1ª VARA DE TRANSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "27/11/2008",
                "movimento": "Autos entregues com carga/vista ao ministério públicoAUTOS ENTREGUES COM CARGA/VISTA AO MINISTÉRIO PÚBLICO NOME DO DESTINATÁRIO: DR. BRUNO JORGEFUNCIONARIO: MARTA ESDRASNO. DAS FOLHAS: 18DATA INICIAL DO PRAZO: 27/11/2008 - Local: 1ª VARA DE TRANSITO DA COMARCA DE FORTALEZA"
            },
            {
                "data": "19/08/2008",
                "movimento": "Remessa à delegacia de origemREMESSA À DELEGACIA DE ORIGEM DELEGACIA: 8° DP - Local: CENTRAL DE INQUERITOS"
            },
            {
                "data": "14/07/2008",
                "movimento": "Entregue ao promotor de justiçaENTREGUE AO PROMOTOR DE JUSTIÇA PROMOTOR: DRA. MORGANA - Local: CENTRAL DE INQUERITOS"
            },
            {
                "data": "11/07/2008",
                "movimento": "Distribuição automáticaDISTRIBUIÇÃO AUTOMÁTICA DISTRIBUIÇÃO AUTOMÁTICA Motivo : EQÜIDADE. - - Local: SERVIÇO DE DISTRIBUIÇAO DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA"
            },
            {
                "data": "11/07/2008",
                "movimento": "Permitir distribuiçãoPERMITIR DISTRIBUIÇÃO - Local: SERVIÇO DE DISTRIBUIÇAO DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA"
            },
            {
                "data": "11/07/2008",
                "movimento": "Em classificaçãoEM CLASSIFICAÇÃO - Local: SERVIÇO DE DISTRIBUIÇAO DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA"
            },
            {
                "data": "10/07/2008",
                "movimento": "ProtocoladoPROTOCOLADO - Local: SERVIÇO DE PORTARIA DOS FEITOS JUDICIAIS DA COMARCA DE FORTALEZA"
            }
        ]
    },
    "segundaInstancia": {
        "numero": " 0070337-91.2008.8.06.0001 ",
        "classe": " Apelação Criminal",
        "area": "Criminal",
        "dataDistribuicao": "",
        "valorAcao": "",
        "partesProcesso": [],
        "movimentacoesLista": [
            {
                "data": " 14/05/2020 ",
                "movimento": " Remessa "
            },
            {
                "data": " 14/05/2020 ",
                "movimento": " Baixa Definitiva "
            },
            {
                "data": " 13/05/2020 ",
                "movimento": " Baixa Definitiva "
            },
            {
                "data": " 13/05/2020 ",
                "movimento": " Transitado em Julgado pelo STJ "
            },
            {
                "data": " 13/05/2020 ",
                "movimento": " Expedição de Certidão "
            }
        ]
    }};
      jest.spyOn(service, 'getDataInstances').mockResolvedValue(expectedResult);

      const result = await controller.getProcessDetails(processNumber);
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if process not found', async () => {
      const processNumber = '0710802-55.2018.8.02.0001';
      jest.spyOn(service, 'getDataInstances').mockResolvedValue(null);
      try {
        await controller.getProcessDetails(processNumber);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual(`Processo com número ${processNumber} não encontrado`);
      }
    });
  });
});
