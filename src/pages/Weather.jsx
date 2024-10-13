import React, { useEffect, useContext, useRef } from "react";
import { WeatherContext } from "../context/context.jsx";

const Weather = () => {

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
  } = useContext(WeatherContext);

  const scrollContainer = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollContainer.current.classList.add("scrolling");
    startX = e.pageX - scrollContainer.current.offsetLeft;
    scrollLeft = scrollContainer.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollContainer.current.classList.remove("scrolling");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollContainer.current.classList.remove("scrolling");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 2; // Increase scroll sensitivity
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    getWeather(city);
  }, [city]);

  return weather ? (
    <div className="grid grid-cols-1 md:col-span-4 gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <div className="sm:col-span-4 bg-slate-800 rounded-md md:rounded-lg flex flex-col-reverse items-center justify-center  gap-3 py-6">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-yellow-300">{weather.cwc["name"]}</p>
            <p className="text-[12px] text-slate-500">{weather.cwc["text"]}</p>
          </div>
          <p className="text-[36px] text-slate-300 mt-4">
            {weather.cwc["temp"]}°<span className="text-[22px]">c</span>
          </p>
          <img className="w-[80px] xl:w-[120px]" src={icon} />
        </div>
        <div className=" min-h-[80px] sm:col-span-2 grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-1 gap-4  ">
          <div className="flex flex-col justify-center items-center gap-3 p-3  bg-slate-800 rounded-md md:rounded-lg">
            <img className="w-[50px] lg:w-[60px]" src={assets.sun_rise} />
            <p className="text-slate-400 font-semibold text-md">
              {weather.cwc["sun_rise"]}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 p-3  bg-slate-800 rounded-md md:rounded-lg">
            <img className="w-[50px] lg:w-[60px]" src={assets.sun_set} />
            <p className="text-slate-400 font-semibold text-md">
              {weather.cwc["sun_set"]}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 bg-slate-800 gap-4 rounded-md md:rounded-lg">
        <p className="text-slate-400 text-[12px]">TODAY'S FORECAST</p>
        <div
          ref={scrollContainer}
          className="flex gap-8 overflow-x-auto scroll-smooth cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ whiteSpace: "nowrap" }}
        >
          {hourData.map((data, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <div className="flex gap-1 items-center justify-center bg-slate-800 rounded-md md:rounded-lg">
                <p className="text-sm text-slate-300">{data.time["hour"]}:00</p>
                <p className="text-sm text-slate-400">{data.time["ampm"]}</p>
              </div>
              <img
                className="w-8"
                src={data.icon ? data.icon : icon}
                alt="weather icon"
              />
              <p className="text-slate-300 text-xl">{data.temp}°</p>
            </div>
          ))}
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
              {weather.cc["real_feel"]}°
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.wind_icon} />
              <p className="text-sm text-yellow-200">Wind</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather.cc["wind_speed"]}km/h
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.rain_icon} />
              <p className="text-[12px] text-yellow-200">Chance of rain</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather.cc["rain_chance"]}%
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.humidity_icon} />
              <p className="text-sm text-yellow-200">Humidity</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather.cc["humidity"]}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.uv_icon} />
              <p className="text-sm text-yellow-200">UV</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather.cc["uv"]}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center py-3 bg-slate-600 rounded-md md:rounded-lg">
            <div className="flex gap-2">
              <img className="w-4" src={assets.cloud_icon} />
              <p className="text-sm text-yellow-200">Cloud</p>
            </div>
            <p className="text-xl font-semibold text-slate-300">
              {weather.cc["cloud"]}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="md:col-span-4 flex justify-center items-center space-x-2">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Weather;
