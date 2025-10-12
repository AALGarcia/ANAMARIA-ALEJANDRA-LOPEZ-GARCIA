export class Usuario {
  id: number;
  nombre: string;
  email: string;
  contraseña: string;
  rol: string; // admin, empleado, cliente, etc.
  fechaRegistro: Date;
  activo: boolean;
}
