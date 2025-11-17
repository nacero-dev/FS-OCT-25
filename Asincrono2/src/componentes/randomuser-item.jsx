function RandomuserItem({ name, email, location }) {
  return (
    <div className="item-card">
      <p><strong>Nombre:</strong> {name.first} {name.last}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Ciudad:</strong> {location.city}</p>
    </div>
  );
}

export default RandomuserItem;
