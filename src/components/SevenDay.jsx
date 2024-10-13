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
            className="grid grid-cols-4 sm:bg-slate-600 sm:p-6 sm:rounded-md md:bg-transparent md:p-2 "
          >
            <p className="text-slate-300 col-span-2 md:text-[12px] lg:text-lg">
              {data.day}
            </p>
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
    <div className="md:col-span-2 flex justify-center items-center space-x-2">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default SevenDay;
