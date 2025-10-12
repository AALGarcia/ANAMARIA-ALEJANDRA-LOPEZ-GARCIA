import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { Movimiento } from './entities/movimiento.entity';


// Definimos el tipo Movimiento
interface Movimiento {
  id: number;
  productoId: string;
  tipo: string;
  cantidad: number;
  fecha: Date;
  observaciones?: string;
}

@Injectable()
export class MovimientoService {
  private movimientos: Movimiento[] = [];
  private idCounter = 1;

  registrarMovimiento(dto: CreateMovimientoDto) {
    const nuevoMovimiento: Movimiento = { id: this.idCounter++, ...dto };
    this.movimientos.push(nuevoMovimiento);
    return nuevoMovimiento;
  }

  listarMovimientos(tipo?: string) {
    if (tipo) {
      return this.movimientos.filter((mov) => mov.tipo === tipo);
    }
    return this.movimientos;
  }

  verMovimiento(id: number) {
    const movimiento = this.movimientos.find((mov) => mov.id === id);
    if (!movimiento)
      throw new NotFoundException(`Movimiento #${id} no encontrado`);
    return movimiento;
  }
}
