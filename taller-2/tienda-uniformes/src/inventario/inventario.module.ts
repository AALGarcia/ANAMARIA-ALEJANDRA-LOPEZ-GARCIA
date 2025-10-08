import { Module } from '@nestjs/common';
import { StockModule } from './stock/stock.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { InventarioController } from './inventario.controller';
import { InventarioService } from './inventario.service';

@Module({
  imports: [StockModule, MovimientoModule],
  controllers: [InventarioController],
  providers: [InventarioService]
})
export class InventarioModule {}
 