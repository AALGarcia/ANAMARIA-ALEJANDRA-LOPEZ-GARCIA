import { Module } from '@nestjs/common';
import { ProductoModule } from './producto/producto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { TiendaController } from './tienda.controller';
import { TiendaService } from './tienda.service';

@Module({
  imports: [ProductoModule, CategoriaModule],
  controllers: [TiendaController],
  providers: [TiendaService]
})
export class TiendaModule {}
