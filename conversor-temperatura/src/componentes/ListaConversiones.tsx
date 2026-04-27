type PropsListaConversiones = {
  conversiones: string[];
};

function ListaConversiones({ conversiones }: PropsListaConversiones) {
  return (
    <div>
      <h2>Resultados de Conversiones</h2>
      <ul>
        {conversiones.map((conversion, indice) => (
          <li key={indice}>{conversion}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaConversiones;