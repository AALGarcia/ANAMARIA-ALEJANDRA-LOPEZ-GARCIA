import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaModule } from './tienda/tienda.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagosModule } from './pagos/pagos.module';
import { InventarioModule } from './inventario/inventario.module';

@Module({
  imports: [TiendaModule, UsuariosModule, PedidosModule, PagosModule, InventarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
