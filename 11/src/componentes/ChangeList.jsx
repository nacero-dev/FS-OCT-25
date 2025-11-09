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


/*



4) Flujo completo de interacción

1. Render inicial:

-ChangeList pinta 3 <ChangeItem>, cada uno con su prop change.
-Cada ChangeItem tiene isActive = false.
-Resultado: 3 <li> sin clase active, mostrando title.

2. El usuario hace clic en el segundo <li>:

-Se ejecuta handleClick de ese ítem.
-setIsActive(!isActive) lo cambia a true.
-React re-renderiza solo ese ChangeItem con isActive = true.
-Ahora:
  -className pasa a "active".
  -El contenido muestra change.title2.
  -El CSS de .active entra en juego (azul, negrita, subrayado).

3. Si vuelve a hacer clic en ese mismo <li>:

-isActive pasa a false.
-Se quita la clase active y vuelve a title.

Nota: cada ítem gestiona su propio estado; cambiar uno no afecta a los demás.

*/