import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateInventarioDto {
  @IsString()
  productoId: string;

  @IsNumber()
  cantidad: number;

  @IsString()
  ubicacion: string;

  @IsDateString()
  fechaIngreso: Date;

  @IsOptional()
  @IsString()
  estado?: string; // nuevo, usado, reservado, etc.
}
