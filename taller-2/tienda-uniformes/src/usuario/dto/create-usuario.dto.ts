import { IsString, IsEmail, IsIn, IsBoolean, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  contraseña: string;

  @IsIn(['admin', 'empleado', 'cliente'])
  rol: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean = true;
}
