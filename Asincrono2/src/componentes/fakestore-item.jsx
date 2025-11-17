function FakestoreItem({ title, price, category }) {
  return (
    <div className="item-card">
      <p><strong>Nombre:</strong> {title}</p>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>Categoría:</strong> {category}</p>
    </div>
  );
}

export default FakestoreItem;
