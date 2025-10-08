import { Module } from '@nestjs/common';
import { MetodoPagoController } from './metodo-pago.controller';
import { MetodoPagoService } from './metodo-pago.service';

@Module({
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService]
})
export class MetodoPagoModule {}
