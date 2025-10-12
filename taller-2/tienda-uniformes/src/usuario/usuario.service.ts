import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [];
  private idCounter = 1;

  crearUsuario(dto: CreateUsuarioDto): Usuario {
    const nuevoUsuario: Usuario = {
      id: this.idCounter++,
      fechaRegistro: new Date(),
      ...dto,
      activo: dto.activo ?? true,
    };
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  obtenerUsuarios(rol?: string): Usuario[] {
    if (rol) {
      return this.usuarios.filter((u) => u.rol === rol);
    }
    return this.usuarios;
  }

  obtenerUsuarioPorId(id: number): Usuario {
    const usuario = this.usuarios.find((u) => u.id === id);
    if (!usuario) throw new NotFoundException(`Usuario #${id} no encontrado`);
    return usuario;
  }

  actualizarUsuario(id: number, dto: UpdateUsuarioDto): Usuario {
    const usuario = this.obtenerUsuarioPorId(id);
    Object.assign(usuario, dto);
    return usuario;
  }

  eliminarUsuario(id: number): void {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1)
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    this.usuarios.splice(index, 1);
  }
}
