'use client';

import Login from '@/componentes/Login';
import Presupuesto from '@/componentes/Presupuesto';
import FormularioGasto from '@/componentes/FormularioGasto';
import ListaGastos from '@/componentes/ListaGastos';
import AlertaPresupuesto from '@/componentes/AlertaPresupuesto';

import { useGastos } from '@/context/GastosContext';

export default function Home() {
  const { usuarioAutenticado } = useGastos();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {!usuarioAutenticado ? (
        <div className="max-w-md mx-auto mt-20">
          <Login />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Administrador de Gastos Personales
          </h1>

          <Presupuesto />

          <AlertaPresupuesto />

          <FormularioGasto />

          <ListaGastos />
        </div>
      )}
    </main>
  );
}