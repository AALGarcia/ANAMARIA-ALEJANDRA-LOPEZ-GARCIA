import { Controller } from '@nestjs/common';

@Controller('stock')
export class StockController {}

@Post()
createStock(@Body() dto: CreateStockDto)

@Get()
getAllStock(@Query('productoId') productoId: number)

@Get(':id')
getStockById(@Param('id') id: number)

@Put(':id')
updateStock(@Param('id') id: number, @Body() dto: UpdateStockDto)

@Delete(':id')
deleteStock(@Param('id') id: number)
