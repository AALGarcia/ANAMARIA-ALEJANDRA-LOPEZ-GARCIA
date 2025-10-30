export class MovimientoEntity {

    id: number;
  productoId: string;
  tipo: string; // 'entrada' | 'salida'
  cantidad: number;
  fecha: Date;
  observaciones?: string;
}
