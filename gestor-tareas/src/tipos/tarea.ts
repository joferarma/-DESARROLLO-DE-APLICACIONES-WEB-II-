export type EstadoTarea = "Pendiente" | "En Proceso" | "Completada";

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
}