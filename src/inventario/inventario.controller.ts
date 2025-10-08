import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateStockDto } from './dto/create-inventario.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('inventario')
export class InventarioController {
  @Post('stock')
  createStock(@Body() data: CreateStockDto) {
    return {
      mensaje: 'Stock creado',
      datos: data,
    };
  }

  @Get('stock/:id')
  getStockById(@Param('id') id: number) {
    return {
      mensaje: `Consultando stock con ID ${id}`,
    };
  }

  @Put('stock/:id')
  updateStock(@Param('id') id: number, @Body() data: UpdateStockDto) {
    return {
      mensaje: `Stock actualizado con ID ${id}`,
      cambios: data,
    };
  }

  @Delete('stock/:id')
  deleteStock(@Param('id') id: number) {
    return {
      mensaje: `Stock eliminado con ID ${id}`,
    };
  }

  @Get('stock')
  getAllStock(@Query('producto') producto: string) {
    return {
      mensaje: 'Listado de stock',
      filtro: producto || 'todos',
    };
  }
}
