import { Module } from '@nestjs/common';
import { TransaccionModule } from './transaccion/transaccion.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { PagosController } from './pagos.controller';
import { PagosService } from './pagos.service';

@Module({
  imports: [TransaccionModule, MetodoPagoModule],
  controllers: [PagosController],
  providers: [PagosService]
})
export class PagosModule {}
