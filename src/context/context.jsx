import React, { createContext, useState } from "react";
import { fetchCurrentWeather } from "../api/apiHandle.js";
import { assets, cityNames } from "../assets/assets.js";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState();
  const [icon, setIcon] = useState(assets.defaulte);
  const [hourData, setHourData] = useState(null);
  const [sdfData , setSdfData] = useState(null)

  const getWeather = async (city) => {
    try {
      setLoading(true);
      const data = await fetchCurrentWeather(city);
      const selectIcon = assets[data.cwc.icon];
      if (selectIcon) {
        setIcon(selectIcon);
      }
      setHourData(data.dayTemp);
      setWeather(data);
      setSdfData(data.sdfArray);
      

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
        cityNames,
        weather,
        loading,
        error,
        city,
        setCity,
        getWeather,
        icon,
        setIcon,
        hourData,
        setHourData,
        sdfData,
        setSdfData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
