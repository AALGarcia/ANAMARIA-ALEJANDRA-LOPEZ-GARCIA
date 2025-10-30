import { Module } from '@nestjs/common';
import { DetalleOrdenController } from './detalle-orden.controller';
import { DetalleOrdenService } from './detalle-orden.service';

@Module({
  controllers: [DetalleOrdenController],
  providers: [DetalleOrdenService]
})
export class DetalleOrdenModule {}
