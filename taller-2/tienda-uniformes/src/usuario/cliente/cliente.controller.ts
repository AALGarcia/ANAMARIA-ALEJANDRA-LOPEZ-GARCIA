import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('usuario/cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  crearCliente(@Body() dto: CreateClienteDto) {
    return this.clienteService.crearCliente(dto);
  }

  @Get()
  obtenerClientes() {
    return this.clienteService.obtenerClientes();
  }

  @Get(':id')
  obtenerClientePorId(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.obtenerClientePorId(id);
  }

  @Put(':id')
  actualizarCliente(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateClienteDto,
  ) {
    return this.clienteService.actualizarCliente(id, dto);
  }

  @Delete(':id')
  eliminarCliente(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.eliminarCliente(id);
  }
}
