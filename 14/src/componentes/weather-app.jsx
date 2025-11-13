import React, { useState, useEffect } from "react";
import "./weather-app.css";

const WeatherApp = () => {
  const [city, setCity] = useState("Madrid");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = "a4e41290621003585d2d0ee57115713e";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Por favor ingresa una ciudad.");
      setWeather(null);
      return;
    }

    // validacion temprana, si city está vacío no hace la petición, limpia datos previos y muestra error de validacion

    try {
      setError("");
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      );


      /* 
        fetch(...): solicita a OpenWeatherMap el clima actual:
         q=${city}: la ciudad a consultar.
         appid=${API_KEY}: tu clave.     
         units=metric: devuelve temperatura en °C.
         lang=es: devuelve la descripción del clima en español.  
      */


      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }

      /*
      response.ok: si la respuesta HTTP no es 2xx, lanza un error
      que captura el catch. OpenWeatherMap, por ejemplo, responde
      404 para ciudad inexistente.
      */

      const data = await response.json();

      /*
      await response.json(): convierte el cuerpo a objeto JS.
      */

      setWeather(data);

      /*
      guarda los datos en estado para que React vuelva a renderizar mostrando la información.
      */

    } catch (err) {
      setError(err.message);
      setWeather(null);

      /*
       guarda los datos en estado para que React vuelva a renderizar mostrando la información.
      */

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();

    const interval = setInterval(fetchWeather, 300000); // Actualiza cada 5 minutos
    return () => clearInterval(interval); // Limpieza del intervalo
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault(); /*e.preventDefault(): evita el recargo de página típico del HTML al enviar formularios.*/
    fetchWeather(); /*Llama a fetchWeather() para ejecutar la consulta con la ciudad actual.*/
  };

  const handleManualRefresh = () => {
    fetchWeather();
  };

  return (
    <div className="weather-app">
      <h1 className="weather-app__title">Clima por ciudad</h1>

      <form onSubmit={handleSubmit} className="weather-app__form">
        <input
          type="text"
          placeholder="Ejemplo: Madrid"
          value={city}
          onChange={(e) => setCity(e.target.value)} /*Cuando el usuario escribe en el input, se actualiza aqui. Este estado sirve para decirle a la API qué ciudad debe buscarse.*/
          className="weather-app__input"
        />
        <button type="submit" className="weather-app__button">
          Buscar
        </button>

        /*
        Al pulsar “Buscar” o Enter, se dispara onSubmit del form,
        se ejecuta handleSubmit y luego fetchWeather.
        */

        /*
        value={city} y onChange: input controlado. El estado city es la fuente de la verdad. 
        Cada pulsación actualiza el estado con setCity.
        */

        <button
          type="button"
          className="weather-app__button weather-app__button--refresh"
          onClick={handleManualRefresh}
        >
          Actualizar
        </button>
      </form>

      {loading && <p className="weather-app__loading">Cargando datos...</p>}
      {error && <p className="weather-app__error">{error}</p>}
      /*Al pulsar “Buscar” o Enter, se dispara onSubmit del form, se ejecuta handleSubmit y luego fetchWeather.*/

      {weather && !loading && !error && (
        <div className="weather-app__info"> /* ver abajo 1. */
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Humedad: {weather.main.humidity}%</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;


/*

Flujo completo resumido
Usuario escribe una ciudad → setCity.
Envía el formulario → handleSubmit evita recarga y llama fetchWeather.
fetchWeather valida city. Si está vacío, establece error y termina.
Si hay ciudad, hace fetch a la URL con la API key.
Si la respuesta es 2xx:
json(), setWeather(data), setError("").
Si la respuesta no es 2xx o hay fallo de red:
setError("..."), setWeather(null).
React re-renderiza mostrando error o los datos.

1.
En JavaScript, cada valor se evalúa como verdadero (truthy) o falso (falsy).
La condición simple:
weather

no pregunta “¿es igual a algo?”.
No está comparando.
Solo evalúa si weather es un valor considerado verdadero o falso.

¿Qué valores puede tener weather?
Antes de obtener datos:
weather = null
null es un valor falso.

React interpreta:
false
Entonces NO se muestra nada.

Después de obtener datos:
weather = { ...datos del clima... }
Un objeto es verdadero.
React interpreta:
true
Entonces la parte derecha de la expresión se ejecuta y React sí muestra el contenido.


Por qué funciona
En JavaScript:
null → falsy
{} cualquier objeto → truthy
React usa esa regla para decidir si debe renderizar.
Por eso:
weather && <div>contenido</div>
funciona así:
Si weather es null → no mostrar <div>.
Si weather es un objeto → sí mostrar <div>.


*/