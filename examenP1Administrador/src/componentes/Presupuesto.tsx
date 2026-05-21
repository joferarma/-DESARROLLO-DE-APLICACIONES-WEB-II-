'use client';

import { useState } from 'react';
import { useGastos } from '@/context/GastosContext';

export default function Presupuesto() {
  const { guardarPresupuesto, presupuesto } = useGastos();

  const [valorPresupuesto, setValorPresupuesto] = useState('');

  const guardar = () => {
    guardarPresupuesto(Number(valorPresupuesto));
    setValorPresupuesto('');
  };

  return (
    <div className="border p-4 rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Presupuesto Mensual</h2>

      <input
        type="number"
        placeholder="Ingrese presupuesto"
        className="border p-2 w-full"
        value={valorPresupuesto}
        onChange={(e) => setValorPresupuesto(e.target.value)}
      />

      <button
        onClick={guardar}
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Guardar Presupuesto
      </button>

      <p className="mt-4 font-bold">
        Presupuesto Actual: L. {presupuesto}
      </p>
    </div>
  );
}