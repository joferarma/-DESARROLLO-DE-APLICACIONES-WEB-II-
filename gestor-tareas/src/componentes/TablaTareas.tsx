"use client";

import { usarTareas } from "@/contexto/TareasContexto";
import { EstadoTarea } from "@/tipos/tarea";

export default function TablaTareas() {
  const {
    tareas,
    cambiarEstado,
    eliminarTarea,
  } = usarTareas();

  return (
    <div>
      <h2>Lista de Tareas</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td>{tarea.id}</td>

              <td>{tarea.titulo}</td>

              <td>{tarea.descripcion}</td>

              <td>
                <select
                  value={tarea.estado}
                  onChange={(e) =>
                    cambiarEstado(
                      tarea.id,
                      e.target.value as EstadoTarea
                    )
                  }
                >
                  <option value="Pendiente">
                    Pendiente
                  </option>

                  <option value="En Proceso">
                    En Proceso
                  </option>

                  <option value="Completada">
                    Completada
                  </option>
                </select>
              </td>

              <td>
                <button
                  onClick={() =>
                    eliminarTarea(tarea.id)
                  }
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {tareas.length === 0 && (
            <tr>
              <td colSpan={5}>
                No hay tareas...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}