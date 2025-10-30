import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = [];
  private idCounter = 1;

  crearCliente(dto: CreateClienteDto): Cliente {
    const nuevoCliente: Cliente = {
      id: this.idCounter++,
      fechaRegistro: new Date(),
      activo: true,
      ...dto,
    };
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  obtenerClientes(): Cliente[] {
    return this.clientes;
  }

  obtenerClientePorId(id: number): Cliente {
    const cliente = this.clientes.find((c) => c.id === id);
    if (!cliente) throw new NotFoundException(`Cliente #${id} no encontrado`);
    return cliente;
  }

  actualizarCliente(id: number, dto: UpdateClienteDto): Cliente {
    const cliente = this.obtenerClientePorId(id);
    Object.assign(cliente, dto);
    return cliente;
  }

  eliminarCliente(id: number): void {
    const index = this.clientes.findIndex((c) => c.id === id);
    if (index === -1)
      throw new NotFoundException(`Cliente #${id} no encontrado`);
    this.clientes.splice(index, 1);
  }
}
