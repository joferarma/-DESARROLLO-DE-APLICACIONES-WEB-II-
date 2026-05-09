"use client";

import { createContext, useContext, useState } from "react";

type TriviaContextType = {
  puntaje: number;
  preguntasRespondidas: number;
  incrementarPuntaje: (puntos: number) => void;
  incrementarRespondidas: () => void;
  reiniciarJuego: () => void;
};

const TriviaContext = createContext<TriviaContextType | undefined>(
  undefined
);

export function TriviaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [puntaje, setPuntaje] = useState(0);
  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);

  const incrementarPuntaje = (puntos: number) => {
    setPuntaje((prev) => prev + puntos);
  };

  const incrementarRespondidas = () => {
    setPreguntasRespondidas((prev) => prev + 1);
  };

  const reiniciarJuego = () => {
    setPuntaje(0);
    setPreguntasRespondidas(0);
  };

  return (
    <TriviaContext.Provider
      value={{
        puntaje,
        preguntasRespondidas,
        incrementarPuntaje,
        incrementarRespondidas,
        reiniciarJuego,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

export function useTrivia() {
  const context = useContext(TriviaContext);

  if (!context) {
    throw new Error("useTrivia debe usarse dentro de TriviaProvider");
  }

  return context;
}