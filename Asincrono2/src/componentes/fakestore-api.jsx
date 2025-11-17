import { useEffect, useState } from "react";
import FakestoreItem from "./fakestore-item.jsx";
import "./fakestore.css";

function FakestoreApi() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let controller = new AbortController();

    let options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal
    };

    fetch("https://fakestoreapi.com/products", options)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.log(err))
      .finally(() => controller.abort());

  }, []);

  return (
    <div className="api-box">
      <h2>FakeStore API</h2>

      <div className="grid">
        {productos.map((producto, index) => (
          <FakestoreItem key={index} {...producto} />
        ))}
      </div>
    </div>
  );
}

export default FakestoreApi;
