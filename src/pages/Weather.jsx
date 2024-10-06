import React from "react";
import { assets } from "../assets/assets";

const Weather = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-4 sm:gap-8  pt-4 sm:justify-between md:grid md:grid-cols-3">
      {/* left container  */}
      <div className="flex flex-col gap-3 md:col-span-2">
        {/* lC-first box */}
        <div className="flex  flex-col-reverse md:flex-row md:justify-between   md:px-8 items-center p-4 bg-slate-800 rounded-md md:rounde-lg lg:p-10 ">
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center mb-4">
              <h1 className="font-semibold text-2xl text-white">Barcelona</h1>
              <p className="text-sm text-slate-500">Chance of rain 0%</p>
            </div>
            <h1 className="font-semibold text-4xl text-white">00°</h1>
          </div>
          <img
            className="w-[100px] mb-3 md:w-[80px]  lg:w-[100px] xl:w-[120px] lg:mr-8 "
            src={assets.temp_icon}
          />
        </div>
        {/* LC- second box */}
        <div className="flex flex-col p-4 bg-slate-800 rounded-md gap-2 cursor-pointer">
          <p className="text-sm font-semibold text-slate-500">
            TODAY'S FORECASE
          </p>
          <div className="flex gap-4 flex-wrap  ">
            <div className=" flex flex-col items-center gap-4 ">
              <p className="text-slate-400">{`6:00AM`}</p>
              <div>
                <img className="w-10" src={assets.temp_icon} />
              </div>
              <h2 className="font-semibold text-white">25°</h2>
            </div>
          </div>
        </div>
        {/* LC-3rd box */}
        <div className="flex flex-col p-4 bg-slate-800 rounded-md gap-2 cursor-pointer">
          <p className="text-sm font-semibold text-slate-500">AIR CONDITIONS</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:grid-cols-4 lg:grid-rows-1">
            <div className="flex flex-col items-center bg-slate-600 p-4 rounded-md">
              <div className="flex items-center ">
                <img className="w-8" src={assets.feel_icon} />
                <p className="text-sm text-amber-100">Real feel</p>
              </div>
              <h1 className="font-semibold text-xl text-gray-300">30°</h1>
            </div>
            <div className="flex flex-col items-center bg-slate-600 p-4 rounded-md">
              <div className="flex items-center ">
                <img className="w-8" src={assets.wind_icon} />
                <p className="text-sm text-amber-100">Wind</p>
              </div>
              <h1 className="font-semibold text-xl text-gray-300">0.2km/h</h1>
            </div>
            <div className="flex flex-col items-center bg-slate-600 p-4 rounded-md">
              <div className="flex items-center ">
                <img className="w-8" src={assets.rain_icon} />
                <p className="text-sm text-amber-100">Chance of rain</p>
              </div>
              <h1 className="font-semibold text-xl text-gray-300">11.2%</h1>
            </div>
            <div className="flex flex-col items-center bg-slate-600 p-4 rounded-md">
              <div className="flex items-center ">
                <img className="w-8" src={assets.rain_icon} />
                <p className="text-sm text-amber-100">UV Index</p>
              </div>
              <h1 className="font-semibold text-xl text-gray-300">3</h1>
            </div>
          </div>
        </div>
      </div>
      {/* roght container */}

      <div className="  flex flex-col sm:gap-2 p-4 md:p-6  lg:p-8 bg-slate-800 rounded-md sm:rounded-lg md:col-span-1">
        {/* sm:min-w-[200px] md:min-w-[300px] lg:min-w-[400px] xl:min-w-[420px] */}
        <p className="text-sm font-semibold text-slate-500 mb-4">
          7-DAY FORECAST
        </p>
        <div className="flex flex-col gap-5  sm:gap-10">
          <div className="flex justify-between sm:gap-[10px]">
            <p className="text-slate-500">Today</p>
            <div className="flex ">
              <img className="w-8 sm:w-6 md:w-8" src={assets.temp_icon} />
            </div>
            <div className="flex mr-8 sm:mr-4">
              <p className="font-semibold text-slate-100">30</p>
              <p className="text-slate-600">/22</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
