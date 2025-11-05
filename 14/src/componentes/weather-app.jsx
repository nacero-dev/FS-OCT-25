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

    try {
      setError("");
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      );

      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
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
    e.preventDefault();
    fetchWeather();
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
          onChange={(e) => setCity(e.target.value)}
          className="weather-app__input"
        />
        <button type="submit" className="weather-app__button">
          Buscar
        </button>
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

      {weather && !loading && !error && (
        <div className="weather-app__info">
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
