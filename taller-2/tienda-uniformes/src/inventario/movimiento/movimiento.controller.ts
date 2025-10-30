import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';


@Controller('movimiento')
export class MovimientoController {
  constructor(private readonly movimientoService: MovimientoService) {}

  
  @Post()
  registrarMovimiento(@Body() dto: CreateMovimientoDto) {
    return this.movimientoService.registrarMovimiento(dto);
  }

  @Get()
  listarMovimientos(@Query('tipo') tipo?: string) {
    return this.movimientoService.listarMovimientos(tipo);
  }

  @Get(':id')
  verMovimiento(@Param('id', ParseIntPipe) id: number) {
    return this.movimientoService.verMovimiento(id);
  }

}
