import React, { createContext, useState } from "react";
import { fetchCurrentWeather } from "../api/apiHandle.js";
import { assets} from "../assets/assets.js";
import weatherIcons from "../assets/weatherIcon.js";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [city, setCity] = useState();
  const [icon, setIcon] = useState(assets.defaulte);

  


  const getWeather = async (city) => {
    try {
      setLoading(true);
      const data = await fetchCurrentWeather(city);
      const iconCode = Number(data.cwc.icon)
      const iconPath = weatherIcons[iconCode]
      if(iconPath){
        console.log(iconPath);
        setIcon(iconPath)
      }
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
        assets,
        weatherIcons,
        weather,
        loading,
        error,
        city,
        setCity,
        getWeather,
        icon,
        setIcon
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
