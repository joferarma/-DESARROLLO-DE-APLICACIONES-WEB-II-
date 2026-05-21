'use client';

import { useGastos } from '@/context/GastosContext';

export default function AlertaPresupuesto() {
  const { obtenerPorcentaje, presupuesto, gastos } = useGastos();

  const porcentaje = obtenerPorcentaje();

  const totalGastado = gastos.reduce(
    (acumulador, gasto) => acumulador + Number(gasto.monto),
    0
  );

  if (presupuesto === 0) {
    return null;
  }

  if (porcentaje >= 100) {
    return (
      <div className="bg-red-500 text-white p-4 rounded-lg mt-4">
        <p className="font-bold">
          Has superado el limite del presupuesto,
          debes ajustar gastos
        </p>

        <p className="mt-2">
          Total gastado: L. {totalGastado}
        </p>

        <p>
          Presupuesto: L. {presupuesto}
        </p>
      </div>
    );
  }

  if (porcentaje >= 80) {
    return (
      <div className="bg-yellow-400 p-4 rounded-lg mt-4">
        <p className="font-bold">
          Advertencia: has alcanzado el 80% del presupuesto
        </p>

        <p className="mt-2">
          Total gastado: L. {totalGastado}
        </p>

        <p>
          Presupuesto: L. {presupuesto}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-200 p-4 rounded-lg mt-4">
      <p className="font-bold">
        Presupuesto disponible correctamente
      </p>

      <p className="mt-2">
        Total gastado: L. {totalGastado}
      </p>

      <p>
        Presupuesto: L. {presupuesto}
      </p>
    </div>
  );
}