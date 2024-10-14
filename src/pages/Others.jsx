import React from "react";
import { Link } from "react-router-dom";

const Others = () => {
  return (
    <div className="md:col-span-4 flax items-center justify-center">
      <h1 className="font-bold text-[50px] mb-[30px]">
        Welcome to my webpage!
      </h1>
      <div className="flex flex-col gap-4 ">
        <h2 className="text-[30px] text-blue-500">About this app</h2>
        <p className="text-sm md:text-[18px]">
          A simple and responsive weather application built with React.js and
          WeatherAPI to show real-time weather information based on city names.
          This project allows users to search for weather data by city and
          displays current weather conditions, including temperature, humidity,
          and weather description.
        </p>
        <p className="text-blue-600 text-[18px]">
          For source code click here {"  "}
          <Link
            to="https://github.com/KousikBhowmik/Weather-app-react" target="_blank"
            className=" text-red-500 hover:text-slate-500 hover:underline  "
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Others;
