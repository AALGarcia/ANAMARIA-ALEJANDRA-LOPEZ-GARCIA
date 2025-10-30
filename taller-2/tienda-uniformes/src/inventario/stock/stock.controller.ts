import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  createStock(@Body() dto: CreateStockDto) {
    return this.stockService.createStock(dto);
  }

  @Get()
  getAllStock(@Query('productoId') productoId?: number) {
    return this.stockService.getAllStock(productoId ? Number(productoId) : undefined);
  }

  @Get(':id')
  getStockById(@Param('id', ParseIntPipe) id: number) {
    return this.stockService.getStockById(id);
  }

  @Put(':id')
  updateStock(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStockDto) {
    return this.stockService.updateStock(id, dto);
  }

  @Delete(':id')
  deleteStock(@Param('id', ParseIntPipe) id: number) {
    return this.stockService.deleteStock(id);
  }
}
