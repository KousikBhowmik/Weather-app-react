import React from "react";
import { useContext } from "react";
import { WeatherContext } from "../context/context";

const SevenDay = () => {
  const {
    assets,
    icon,
    weather,
    loading,
    error,
    city,
    setCity,
    getWeather,
    hourData,
    sdfData,
  } = useContext(WeatherContext);
  return weather ? (
    <div className=" md:col-span-2 flex flex-col h-fit gap-4 p-5 md:p-6 rounded-md md:rounded-lg bg-slate-800">
      <p className="text-sm text-slate-400">
        {weather.cwc["name"]} 7-DAY FORECAST
      </p>
      <div className="gap-8 flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:flex md:flex-col md:gap-8">
        {sdfData.map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 "
          >
            <p className="text-slate-300">{data.day}</p>
            <img className="w-8" src={data.icon ? data.icon : icon} />
            <div className="flex items-center justify-center">
              <p className="text-slate-300">{data.max_temp}</p>
              <p className="text-slate-500">/{data.min_temp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="md:col-span-4 flex justify-center items-center space-x-2">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
};

export default SevenDay;
