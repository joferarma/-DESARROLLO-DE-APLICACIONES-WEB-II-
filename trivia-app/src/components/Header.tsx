"use client";

import { useTrivia } from "@/context/TriviaContext";

export default function Header() {
  const { puntaje, preguntasRespondidas } = useTrivia();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Juego de Trivia</h1>

      <div>
        <p>Puntaje: {puntaje}</p>
        <p>Respuestas: {preguntasRespondidas}</p>
      </div>
    </header>
  );
}