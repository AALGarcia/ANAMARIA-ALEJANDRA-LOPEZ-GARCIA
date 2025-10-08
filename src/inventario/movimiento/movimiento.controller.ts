import { Controller } from '@nestjs/common';

@Controller('movimiento')
export class MovimientoController {}

@Post()
registrarMovimiento(@Body() dto: CreateMovimientoDto)

@Get()
listarMovimientos(@Query('tipo') tipo: string)

@Get(':id')
verMovimiento(@Param('id') id: number)
