import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [ClienteModule],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
