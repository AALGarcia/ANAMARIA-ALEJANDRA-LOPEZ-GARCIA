export class CreateInventarioDto {
  productoId: string;
  cantidad: number;
  ubicacion: string;
  fechaIngreso: Date;
  estado?: string; // ejemplo: 'nuevo', 'usado', 'reservado'
}
