function BotonIdioma({ texto, cambiarIdioma, idioma }) {
  return (
    <button onClick={() => cambiarIdioma(idioma)} style={estiloBoton}>
      {texto}
    </button>
  );
}

const estiloBoton = {
  margin: '5px',
  padding: '10px 15px',
  cursor: 'pointer',
  fontSize: '16px',
  color: 'black',
};

export default BotonIdioma;