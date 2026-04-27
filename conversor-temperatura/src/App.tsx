import './App.css'
import ListaConversiones from "./componentes/ListaConversiones";

function App() {
  const valorTemperatura = 20;

  const [unidad] = useState<"Celsius" | "Fahrenheit" | "Kelvin">("Celsius");

  let conversiones: string[] = [];

  if (unidad === "Celsius") {
    const fahrenheit = (valorTemperatura * 9 / 5) + 32;
    const kelvin = valorTemperatura + 273.15;

    conversiones = [
      `${valorTemperatura} °C = ${fahrenheit.toFixed(2)} °F`,
      `${valorTemperatura} °C = ${kelvin.toFixed(2)} K`,
      `${fahrenheit.toFixed(2)} °F = ${kelvin.toFixed(2)} K`
    ];
  }

  if (unidad === "Fahrenheit") {
    const celsius = (valorTemperatura - 32) * 5 / 9;
    const kelvin = celsius + 273.15;

    conversiones = [
      `${valorTemperatura} °F = ${celsius.toFixed(2)} °C`,
      `${valorTemperatura} °F = ${kelvin.toFixed(2)} K`,
      `${celsius.toFixed(2)} °C = ${kelvin.toFixed(2)} K`
    ];
  }

  if (unidad === "Kelvin") {
    const celsius = valorTemperatura - 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;

    conversiones = [
      `${valorTemperatura} K = ${celsius.toFixed(2)} °C`,
      `${valorTemperatura} K = ${fahrenheit.toFixed(2)} °F`,
      `${celsius.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F`
    ];
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Conversor de Temperatura</h1>
      <p>Valor inicial: {valorTemperatura} {unidad}</p>

      <ListaConversiones conversiones={conversiones} />
    </div>
  );
}

export default App;

function useState<T>(initial: T): [T, (value: T) => void] {
  let state = initial;
  const setState = (value: T) => {
    state = value;
  };
  return [state, setState];
}
