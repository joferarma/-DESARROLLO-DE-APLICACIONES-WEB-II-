import FormularioTarea from "@/componentes/FormularioTarea";
import TablaTareas from "@/componentes/TablaTareas";

export default function Home() {
  return (
    <main
      style={{
        padding: "20px",
      }}
    >
      <h1>Gestor de Tareas</h1>

      <FormularioTarea />

      <br />

      <TablaTareas />
    </main>
  );
}