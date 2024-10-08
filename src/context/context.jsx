import React, { createContext, useState, useEffect } from "react";
import { fetchWeatherData } from "../api/apiData.js";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [city, setCity] = useState();


  const getWeather = async (city) => {
    try {
      setLoading(true);
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError(null); 
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, loading, error, city, setCity, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
