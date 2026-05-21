'use client';

import { useState } from 'react';
import { useGastos } from '@/context/GastosContext';

export default function Login() {
  const { iniciarSesion } = useGastos();

  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarLogin = () => {
    const acceso = iniciarSesion(usuario, clave);

    if (!acceso) {
      setMensaje('Usuario o clave incorrecta');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8 border rounded-lg bg-white">
      <h1 className="text-2xl font-bold">Inicio de Sesion</h1>

      <input
        type="text"
        placeholder="Usuario"
        className="border p-2"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Clave"
        className="border p-2"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      />

      <button
        onClick={manejarLogin}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Ingresar
      </button>

      {mensaje && <p className="text-red-500">{mensaje}</p>}
    </div>
  );
}