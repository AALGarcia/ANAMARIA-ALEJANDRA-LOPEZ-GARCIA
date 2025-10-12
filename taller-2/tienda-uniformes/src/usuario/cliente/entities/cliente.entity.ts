import { Usuario } from '../../entities/usuario.entity';

export class Cliente extends Usuario {
  direccion: string;
  telefono: string;
  puntosAcumulados?: number;
}
