"use client";

import { useEffect, useState } from "react";
import { preguntas } from "@/data/preguntas";
import { useTrivia } from "@/context/TriviaContext";

type Pregunta = {
  idPreguntas: string;
  DescripcionPregunta: string;
  opcionRespuesta1: boolean;
  opcionRespuesta2: boolean;
  respuestaCorrecta: boolean;
  puntajePregunta: number;
};

export default function Home() {
  const [listaPreguntas, setListaPreguntas] =
    useState<Pregunta[]>([]);

  const [preguntaActual, setPreguntaActual] =
    useState(0);

  const [respuestaSeleccionada, setRespuestaSeleccionada] =
    useState<boolean | null>(null);

  const [mensaje, setMensaje] = useState("");

  const [juegoFinalizado, setJuegoFinalizado] =
    useState(false);

  const [iniciarJuego, setIniciarJuego] =
    useState(false);

  const {
    incrementarPuntaje,
    incrementarRespondidas,
    reiniciarJuego,
    puntaje,
  } = useTrivia();

  useEffect(() => {
    setListaPreguntas(preguntas);
  }, []);

  const manejarRespuesta = (respuesta: boolean) => {
    setRespuestaSeleccionada(respuesta);

    const pregunta = listaPreguntas[preguntaActual];

    if (respuesta === pregunta.respuestaCorrecta) {
      setMensaje("Respuesta correcta! 🎉");

      incrementarPuntaje(
        pregunta.puntajePregunta
      );
    } else {
      setMensaje("Respuesta incorrecta! ❌");
    }

    incrementarRespondidas();
  };

  const siguientePregunta = () => {
    setRespuestaSeleccionada(null);
    setMensaje("");

    if (
      preguntaActual <
      listaPreguntas.length - 1
    ) {
      setPreguntaActual(
        preguntaActual + 1
      );
    } else {
      setJuegoFinalizado(true);
    }
  };

  const volverInicio = () => {
    setPreguntaActual(0);
    setRespuestaSeleccionada(null);
    setMensaje("");
    setJuegoFinalizado(false);
    setIniciarJuego(false);

    reiniciarJuego();
  };

  if (!iniciarJuego) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold mb-6">
          Trivia App 🎮 
        </h1>

        <button
          onClick={() => setIniciarJuego(true)}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl"
        >
          Iniciar Juego
        </button>
      </div>
    );
  }

  if (listaPreguntas.length === 0) {
    return <p>Cargando preguntas...</p>;
  }

  if (juegoFinalizado) {
    return (
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Juego Terminado! 
        </h2>

        <p className="text-xl mb-6">
          Puntaje Final: {puntaje}
        </p>

        <button
          onClick={volverInicio}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const pregunta =
    listaPreguntas[preguntaActual];

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Pregunta #{preguntaActual + 1}:
      </h2>

      <p className="text-lg mb-6">
        {pregunta.DescripcionPregunta}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() =>
            manejarRespuesta(true)
          }
          disabled={
            respuestaSeleccionada !== null
          }
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Verdadero
        </button>

        <button
          onClick={() =>
            manejarRespuesta(false)
          }
          disabled={
            respuestaSeleccionada !== null
          }
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Falso
        </button>
      </div>

      {mensaje && (
        <p className="mt-4 text-xl font-semibold">
          {mensaje}
        </p>
      )}

      {respuestaSeleccionada !== null && (
        <button
          onClick={siguientePregunta}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Siguiente Pregunta
        </button>
      )}
    </div>
  );
}