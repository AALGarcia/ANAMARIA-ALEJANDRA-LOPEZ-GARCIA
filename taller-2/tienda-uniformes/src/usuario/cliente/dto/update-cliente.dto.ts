import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @IsOptional()
  @IsNumber()
  puntosAcumulados?: number;
}
