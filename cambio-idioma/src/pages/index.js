import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { useState, useEffect } from 'react';
import BotonIdioma from '../componentes/BotonIdioma';

export default function App() {
  const palabras = [
    { es: "Casa", en: "House" },
    { es: "Perro", en: "Dog" },
    { es: "Comida", en: "Food" },
    { es: "Escuela", en: "School" },
    { es: "Libro", en: "Book" },
    { es: "Mesa", en: "Table" },
    { es: "Silla", en: "Chair" },
    { es: "Agua", en: "Water" },
    { es: "Puerta", en: "Door" },
    { es: "Ventana", en: "Window" }
  ];

  const [idiomaActual, setIdiomaActual] = useState("es");
  const [listaMostrada, setListaMostrada] = useState([]);

  useEffect(() => {
    const nuevaLista = palabras.map((palabra) => palabra[idiomaActual]);
    setListaMostrada(nuevaLista);
  }, [idiomaActual]);

  function cambiarIdioma(nuevoIdioma) {
    setIdiomaActual(nuevoIdioma);
  }

  return (
    <div style={estiloContenedor}>
      <h1>Cambio de Idioma</h1>

      <BotonIdioma
        texto="Cambiar Idioma Español"
        cambiarIdioma={cambiarIdioma}
        idioma="es"
      />

      <BotonIdioma
        texto="Cambiar Idioma Inglés"
        cambiarIdioma={cambiarIdioma}
        idioma="en"
      />

      <ul>
        {listaMostrada.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </div>
  );
}

const estiloContenedor = {
  textAlign: 'center',
  marginTop: '30px'
};