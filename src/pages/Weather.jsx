import React, { useEffect, useContext, useState } from "react";
import { assets } from "../assets/assets";
import { WeatherContext } from "../context/context.jsx";


const Weather = () => {
  const { weather, loading, error, city, setCity, getWeather } =
    useContext(WeatherContext);
  useEffect(() => {
   getWeather(city) ;
  }, [city]);
  
  return weather ? (
    <div className="grid grid-cols-1 md:col-span-4 gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <div className="sm:col-span-4 bg-slate-800 rounded-md md:rounded-lg flex flex-col-reverse items-center justify-center  gap-3 py-6">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-yellow-300">{weather.name}</p>
            <p className="text-[12px] text-slate-500">{weather.typeWeather}</p>
          </div>
          <p className="text-[36px] text-slate-300 mt-4">
            {weather["mainData"]["temp"]}°<span className="text-[22px]">c</span>
          </p>
          <img className="w-[80px] xl:w-[120px]" src={assets.temp_icon} />
        </div>
        <div className=" min-h-[80px] sm:col-span-2 grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-1 gap-4  ">
          <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
            <p className="text-2xl text-slate-400 ">00:00</p>
            <p className="text-2xl text-slate-500">AM</p>
          </div>
          <div className="flex items-center justify-center bg-slate-800 rounded-md md:rounded-lg text-xl text-slate-400 ">
            08/10/2024
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 bg-slate-800 gap-4 rounded-md md:rounded-lg">
        <p className="text-slate-500 text-[12px]">TODAY'S FORECAST</p>
        <div className="flex flex-wrap gap-8 ">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
              <p className="text-sm text-slate-300 ">00:00</p>
              <p className="text-sm text-slate-400">AM</p>
            </div>
            <img className="w-8" src={assets.temp_icon} />
            <p className="text-slate-300 text-xl">24°</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
              <p className="text-sm text-slate-300 ">00:00</p>
              <p className="text-sm text-slate-400">AM</p>
            </div>
            <img className="w-8" src={assets.temp_icon} />
            <p className="text-slate-300 text-xl">24°</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
              <p className="text-sm text-slate-300 ">00:00</p>
              <p className="text-sm text-slate-400">AM</p>
            </div>
            <img className="w-8" src={assets.temp_icon} />
            <p className="text-slate-300 text-xl">24°</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
              <p className="text-sm text-slate-300 ">00:00</p>
              <p className="text-sm text-slate-400">AM</p>
            </div>
            <img className="w-8" src={assets.temp_icon} />
            <p className="text-slate-300 text-xl">24°</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
              <p className="text-sm text-slate-300 ">00:00</p>
              <p className="text-sm text-slate-400">AM</p>
            </div>
            <img className="w-8" src={assets.temp_icon} />
            <p className="text-slate-300 text-xl">24°</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
              <p className="text-sm text-slate-300 ">00:00</p>
              <p className="text-sm text-slate-400">AM</p>
            </div>
            <img className="w-8" src={assets.temp_icon} />
            <p className="text-slate-300 text-xl">24°</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
              <p className="text-sm text-slate-300 ">00:00</p>
              <p className="text-sm text-slate-400">AM</p>
            </div>
            <img className="w-8" src={assets.temp_icon} />
            <p className="text-slate-300 text-xl">24°</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5 bg-slate-800 rounded-md md:rounded-lg">
        <p className="text-[12px] text-slate-400">AIR CONDITION</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.feel_icon} />
              <p className="text-sm text-yellow-200">Real feel</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather["mainData"]["feel_like"]}°
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.wind_icon} />
              <p className="text-sm text-yellow-200">Wind</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather["windData"]}km/h
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.rain_icon} />
              <p className="text-sm text-yellow-200">Chance of rain</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">0%</p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.uv_icon} />
              <p className="text-sm text-yellow-200">Humidity</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather["mainData"]["humidity"]}
            </p>
          </div>
        </div>
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

export default Weather;
