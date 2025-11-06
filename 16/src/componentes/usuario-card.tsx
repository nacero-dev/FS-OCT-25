type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
};

type Props = {
  usuario: Usuario;
};

const UsuarioCard = ({ usuario }: Props) => {
  const estilo = {
    backgroundColor: usuario.activo ? "#b3f0b3" : "#f0b3b3",
    padding: "1rem",
    margin: "0.5rem 0",
  };

  return (
    <div style={estilo}>
      <h3>{usuario.nombre}</h3>
      <p>Edad: {usuario.edad}</p>
      <p>{usuario.activo ? "Activo" : "Inactivo"}</p>
    </div>
  );
};

export default UsuarioCard;
