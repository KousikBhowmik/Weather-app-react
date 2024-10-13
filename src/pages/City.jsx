import React from "react";
import { useContext, useState } from "react";
import { WeatherContext } from "../context/context.jsx";
import { Link } from "react-router-dom";

const City = () => {
  const {
    assets,
    cityNames,
    icon,
    weather,
    loading,
    error,
    city,
    setCity,
    getWeather,
    hourData,
  } = useContext(WeatherContext);

  const dataPass = (data) => {
    setCity(data);
  }

  return (
    <div className=" md:col-span-4 flex flex-col gap-4">
      <p className="w-full text-center p-4 text-xl font-semibold text-yellow-200 bg-slate-800 rounded-md md:rounded-lg">
        City's
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cityNames.map((data, index) => (
          <Link to='/' 
          onClick={() => dataPass(data)} key={index}  className="relative cursor-pointer">
            <div
              className=" aspect-video rounded-md md:rounded-lg  bg-cover bg-no-repeat bg-center opacity-[0.35] "
              style={{ backgroundImage: `url(${assets[data]})` }}
            ></div>
            <p className=" absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-lg text-white ">
              {data}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default City;
