import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  crearUsuario(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.crearUsuario(dto);
  }

  @Get()
  obtenerUsuarios(@Query('rol') rol?: string) {
    return this.usuarioService.obtenerUsuarios(rol);
  }

  @Get(':id')
  obtenerUsuarioPorId(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.obtenerUsuarioPorId(id);
  }

  @Put(':id')
  actualizarUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.actualizarUsuario(id, dto);
  }

  @Delete(':id')
  eliminarUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.eliminarUsuario(id);
  }
}
