'use client';

import { useGastos } from '@/context/GastosContext';

export default function ListaGastos() {
  const { gastos } = useGastos();

  return (
    <div className="border p-4 rounded-lg bg-white mt-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">
        Lista de Gastos
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Categoria</th>
            <th className="border p-2">Monto</th>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Descripcion</th>
          </tr>
        </thead>

        <tbody>
          {gastos.map((gasto) => (
            <tr key={gasto.idgasto}>
              <td className="border p-2">
                {gasto.categoria}
              </td>

              <td className="border p-2">
                L. {gasto.monto}
              </td>

              <td className="border p-2">
                {gasto.fecha}
              </td>

              <td className="border p-2">
                {gasto.descripcion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}