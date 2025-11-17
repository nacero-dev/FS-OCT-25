import { useEffect, useState } from "react";
import RandomuserItem from "./randomuser-item.jsx";
import "./randomuser.css";

function RandomuserApi() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    let controller = new AbortController();

    let options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal
    };

    fetch("https://randomuser.me/api/?results=5", options)
      .then(res => res.json())
      .then(data => setUsuarios(data.results))
      .catch(err => console.log(err))
      .finally(() => controller.abort());

  }, []);

  return (
    <div className="api-box">
      <h2>Random User API</h2>

      {usuarios.map((usuario, index) => (
        <RandomuserItem key={index} {...usuario} />
      ))}
    </div>
  );
}

export default RandomuserApi;
