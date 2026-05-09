"use client";

import { useState } from "react";
import { usarTareas } from "@/contexto/TareasContexto";

export default function FormularioTarea() {
  const { agregarTarea } = usarTareas();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejarEnvio = (
    evento: React.FormEvent<HTMLFormElement>
  ) => {
    evento.preventDefault();

    if (!titulo || !descripcion) return;

    agregarTarea(titulo, descripcion);

    setTitulo("");
    setDescripcion("");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Agregar Tarea</h2>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) =>
          setTitulo(e.target.value)
        }
      />

      <br />
      <br />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) =>
          setDescripcion(e.target.value)
        }
      />

      <br />
      <br />

      <button type="submit">
        Agregar
      </button>
    </form>
  );
}