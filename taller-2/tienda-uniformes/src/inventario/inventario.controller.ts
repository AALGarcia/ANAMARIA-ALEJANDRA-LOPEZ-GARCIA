import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Controller('inventario')
export class InventarioController {
  
  @Post()
  createStock(@Body() data: CreateInventarioDto) {
    return {
      mensaje: 'Stock creado exitosamente',
      datos: data,
    };
  }

  @Get(':id')
  getStockById(@Param('id', ParseIntPipe) id: number) {
    return {
      mensaje: `Consultando stock con ID ${id}`,
    };
  }

  @Put(':id')
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateInventarioDto,
  ) {
    return {
      mensaje: `Stock actualizado con ID ${id}`,
      cambios: data,
    };
  }

  @Delete(':id')
  deleteStock(@Param('id', ParseIntPipe) id: number) {
    return {
      mensaje: `Stock eliminado con ID ${id}`,
    };
  }

  @Get()
  getAllStock(@Query('producto') producto: string) {
    return {
      mensaje: 'Listado de inventario',
      filtro: producto || 'todos',
    };
  }
}
