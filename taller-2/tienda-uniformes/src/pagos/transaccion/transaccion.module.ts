import { Module } from '@nestjs/common';
import { TransaccionController } from './transaccion.controller';
import { TransaccionService } from './transaccion.service';

@Module({
  controllers: [TransaccionController],
  providers: [TransaccionService]
})
export class TransaccionModule {}
