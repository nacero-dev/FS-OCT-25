import { useState } from "react";

const List = () => {
  const [items, setItems] = useState([
    { id: 1, name: "nombre 1" },
    { id: 2, name: "nombre 2" },
    { id: 3, name: "nombre 3" },
    { id: 4, name: "nombre 4" },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => removeItem(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;


/* se ve despues, no es lo mejor la estructura del array en useState*/