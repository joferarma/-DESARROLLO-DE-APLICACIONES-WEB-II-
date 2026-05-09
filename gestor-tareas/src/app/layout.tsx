import type { Metadata } from "next";
import { ProveedorTareas } from "@/contexto/TareasContexto";

export const metadata: Metadata = {
  title: "Gestor de Tareas",
  description: "Aplicacion ToDo List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ProveedorTareas>
          {children}
        </ProveedorTareas>
      </body>
    </html>
  );
}