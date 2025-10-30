import ChangeItem from "./ChangeItem";

const changes = [
  { id: 1, title: "Elemento 1", title2: "¡Clic hecho!" },
  { id: 2, title: "Elemento 2", title2: "¡Clic hecho!" },
  { id: 3, title: "Elemento 3", title2: "¡Clic hecho!" },
];

const ChangeList = () => {
  return (
    <ul>
      {changes.map((change) => (
        <ChangeItem key={change.id} change={change} />
      ))}
    </ul>
  );
};

export default ChangeList;
