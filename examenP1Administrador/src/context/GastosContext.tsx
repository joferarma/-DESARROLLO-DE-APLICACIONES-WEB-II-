'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import api from '@/servicios/api';
import { Gasto } from '@/interfaces/gasto';

interface GastosContextType {
  usuarioAutenticado: boolean;
  presupuesto: number;
  gastos: Gasto[];
  iniciarSesion: (usuario: string, clave: string) => boolean;
  cerrarSesion: () => void;
  guardarPresupuesto: (valor: number) => void;
  agregarGasto: (gasto: Gasto) => Promise<void>;
  obtenerPorcentaje: () => number;
}

type GastosContextProps = GastosContextType | null;

const GastosContext = createContext<GastosContextProps>(null);

export const GastosProvider = ({ children }: { children: ReactNode }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);

  const iniciarSesion = (usuario: string, clave: string) => {
    if (usuario === 'admin' && clave === 'admin123') {
      setUsuarioAutenticado(true);
      return true;
    }

    return false;
  };

  const cerrarSesion = () => {
    setUsuarioAutenticado(false);
  };

  const guardarPresupuesto = (valor: number) => {
    setPresupuesto(valor);
  };

  const cargarGastos = async () => {
    try {
      const respuesta = await api.get('/gasto');
      setGastos(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarGasto = async (gasto: Gasto) => {
    try {
      await api.post('/gasto', gasto);
      await cargarGastos();
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerPorcentaje = () => {
    const total = gastos.reduce(
      (acumulador, gasto) => acumulador + Number(gasto.monto),
      0
    );

    return (total / presupuesto) * 100;
  };

  useEffect(() => {
    const cargar = async () => {
      await cargarGastos();
    };

    void cargar();
  }, []);

  return (
    <GastosContext.Provider
      value={{
        usuarioAutenticado,
        presupuesto,
        gastos,
        iniciarSesion,
        cerrarSesion,
        guardarPresupuesto,
        agregarGasto,
        obtenerPorcentaje,
      }}
    >
      {children}
    </GastosContext.Provider>
  );
};

export const useGastos = () => {
  const context = useContext(GastosContext);

  if (!context) {
    throw new Error('Error en context');
  }

  return context;
};