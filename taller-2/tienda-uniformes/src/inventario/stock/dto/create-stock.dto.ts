import { IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNumber()
  productoId: number;

  @IsNumber()
  cantidad: number;
}
