Olá, esse é o meu projeto! 

Ele foi desenvolvido em TypeScript com o Framework Nest.Js
https://nestjs.com/

Motivo da escolha: O NestJs possui uma documentação extensa e muito detalhada, além disso, é uma ótima escolha para códigos que precisarão ser escalados em um futuro próximo. 

Bom, para startar existem dois caminhos: 

O primeiro caminho e mais simples é com o Docker e Docker-Compose instalados na máquina
  - Clone o projeto neste repositório;
  - Na pasta raiz do projeto, abra o terminal e digite "docker-compose up -d"
   - Para acessar o servidor, vá até um navegador ou softwares como swagger, insomnia ou postman e digite 'localhost:3000'

O segundo caminho é com o nodejs na versão 20.9.0 ou versões similares
 - Clone o projeto neste repositório; 
 - Abra o terminal na pasta raiz do projeto e digite 'npm install' ou 'npm i'; 
 - Para rodar, digite no terminas, 'npm start'; 
 - Para rodar os testes automatizados, digite no terminal, 'npm run tests'; 
 - Para acessar o servidor, vá até um navegador ou softwares como swagger, insomnia ou postman
e digite 'localhost:3000'

Para testar a api manualmente há alguns passos a seguir: 

  - Abra o navegador ou algum software disponível para testes de API e digite:
  localhost:3000/api/processos/{numeroProcesso}
  - Ele deve retornar o processo no seguinte formato: 
    - 
Para testar cada crawler manualmente, os passos são o seguinte: 

  - TJAL: Abra o navegador ou algum software disponível para testes de API e digite:
  localhost:3000/crawler-tjal/{numeroProcesso}
    - Ele deve retornar o processo no seguinte formato: 
      - 
  - TJCE: Abra o navegador ou algum software disponível para testes de API e digite:
  localhost:3000/crawler-tjce/{numeroProcesso}
    - Ele deve retornar o processo no seguinte formato: 
      - 
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
