import { Module } from '@nestjs/common';
import { OrdenModule } from './orden/orden.module';
import { DetalleOrdenModule } from './detalle-orden/detalle-orden.module';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';

@Module({
  imports: [OrdenModule, DetalleOrdenModule],
  controllers: [PedidosController],
  providers: [PedidosService]
})
export class PedidosModule {}
