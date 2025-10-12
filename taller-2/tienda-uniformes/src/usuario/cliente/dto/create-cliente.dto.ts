import { CreateUsuarioDto } from '../../dto/create-usuario.dto';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateClienteDto extends CreateUsuarioDto {
  @IsString()
  direccion: string;

  @IsString()
  telefono: string;

  @IsOptional()
  @IsNumber()
  puntosAcumulados?: number;
}
