import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { MovimientoEntity } from './entities/movimiento.entity';


// Defino el tipo Movimiento
export interface MovimientoEntity {
  id: number;
  productoId: string;
  tipo: string;
  cantidad: number;
  fecha: Date;
  observaciones?: string;
}
@Injectable()
export class MovimientoService {
  private movimientos: MovimientoEntity[] = [];
  private idCounter = 1;

  registrarMovimiento(dto: CreateMovimientoDto): MovimientoEntity {
    const nuevo: MovimientoEntity = {
      id: this.idCounter++,
      ...dto,
    };
    this.movimientos.push(nuevo);
    return nuevo;
  }

  listarMovimientos(tipo?: string): MovimientoEntity[] {
    if (tipo) {
      return this.movimientos.filter((m) => m.tipo === tipo);
    }
    return this.movimientos;
  }

  verMovimiento(id: number): MovimientoEntity {
    const movimiento = this.movimientos.find((m) => m.id === id);
    if (!movimiento)
      throw new NotFoundException(`Movimiento #${id} no encontrado`);
    return movimiento;
  }

  actualizarMovimiento(id: number, dto: UpdateMovimientoDto): MovimientoEntity {
    const movimiento = this.verMovimiento(id);
    Object.assign(movimiento, dto);
    return movimiento;
  }

  eliminarMovimiento(id: number): void {
    const index = this.movimientos.findIndex((m) => m.id === id);
    if (index === -1)
      throw new NotFoundException(`Movimiento #${id} no encontrado`);
    this.movimientos.splice(index, 1);
  }
}