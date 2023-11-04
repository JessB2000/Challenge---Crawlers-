import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiService } from '../services/api.service';

@Controller('api/processos')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get(':numeroProcesso')
  async getInfoProcesso(@Param('numeroProcesso') numeroProcesso: string) {
    try {
      const process = await this.apiService.getProcessos(numeroProcesso);
      if (!process) {
        throw new NotFoundException(
          `Processo com número ${numeroProcesso} não encontrado`,
        );
      }
      return process;
    } catch (error) {
      throw new NotFoundException('Processo não encontrado', error);
    }
  }
}
