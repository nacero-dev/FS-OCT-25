type SaludoProps = {
  nombre: string;
};

function Saludo({ nombre }: SaludoProps) {
  return <h2>Hola, {nombre}</h2>;
}

export default Saludo;
