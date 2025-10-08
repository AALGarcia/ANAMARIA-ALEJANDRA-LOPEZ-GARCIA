export class CreateMovimientoDto {
  tipo: string; // ejemplo: 'entrada' | 'salida'
  cantidad: number;
  productoId: string;
  fecha: Date;
  observaciones?: string;
}
