"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { Tarea, EstadoTarea } from "@/tipos/tarea";

interface TareasContextoTipo {
  tareas: Tarea[];
  agregarTarea: (
    titulo: string,
    descripcion: string
  ) => void;

  cambiarEstado: (
    id: number,
    nuevoEstado: EstadoTarea
  ) => void;

  eliminarTarea: (id: number) => void;
}

const TareasContexto = createContext<
  TareasContextoTipo | undefined
>(undefined);

export function ProveedorTareas({
  children,
}: {
  children: ReactNode;
}) {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = (
    titulo: string,
    descripcion: string
  ) => {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo,
      descripcion,
      estado: "Pendiente",
    };

    setTareas([...tareas, nuevaTarea]);
  };

  const cambiarEstado = (
    id: number,
    nuevoEstado: EstadoTarea
  ) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === id
        ? { ...tarea, estado: nuevoEstado }
        : tarea
    );

    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id: number) => {
    const tareasFiltradas = tareas.filter(
      (tarea) => tarea.id !== id
    );

    setTareas(tareasFiltradas);
  };

  return (
    <TareasContexto.Provider
      value={{
        tareas,
        agregarTarea,
        cambiarEstado,
        eliminarTarea,
      }}
    >
      {children}
    </TareasContexto.Provider>
  );
}

export function usarTareas() {
  const contexto = useContext(TareasContexto);

  if (!contexto) {
    throw new Error(
      "usarTareas debe usarse dentro del ProveedorTareas"
    );
  }

  return contexto;
}