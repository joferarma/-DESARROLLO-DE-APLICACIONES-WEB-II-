'use client';

import { useState } from 'react';
import { useGastos } from '@/context/GastosContext';

export default function FormularioGasto() {
  const { agregarGasto } = useGastos();

  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const guardarGasto = async () => {
    if (!categoria || !monto || !fecha) {
      alert('Complete todos los campos');
      return;
    }

    await agregarGasto({
      categoria,
      monto: Number(monto),
      fecha,
      descripcion,
    });

    alert('Gasto guardado correctamente');

    setCategoria('');
    setMonto('');
    setFecha('');
    setDescripcion('');
  };

  return (
    <div className="border p-4 rounded-lg bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">
        Registrar Gasto
      </h2>

      <input
        type="text"
        placeholder="Categoria personalizada"
        className="border p-2 w-full mb-2"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monto"
        className="border p-2 w-full mb-2"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />

      <input
        type="date"
        className="border p-2 w-full mb-2"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripcion"
        className="border p-2 w-full mb-2"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <button
        onClick={guardarGasto}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Guardar Gasto
      </button>
    </div>
  );
}