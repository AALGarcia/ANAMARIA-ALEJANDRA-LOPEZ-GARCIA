import { IsString, IsIn, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateMovimientoDto {
  @IsString()
  productoId: string;

  @IsIn(['entrada', 'salida'])
  tipo: string;

  @IsNumber()
  cantidad: number;

  @IsDateString()
  fecha: Date;

  @IsOptional()
  @IsString()
  observaciones?: string;
}



