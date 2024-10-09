import React, { createContext, useState } from "react";
import { fetchWeatherData, timeFun } from "../api/apiData.js";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [city, setCity] = useState();
  const [mainTime, setMainTime] = useState(null);

  const getTime = async () =>{
    const tempTime = await timeFun();
    setMainTime(tempTime);
  }


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
    <WeatherContext.Provider
      value={{
        weather,
        loading,
        error,
        city,
        setCity,
        getWeather,
        mainTime,
        setMainTime,
        getTime,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
