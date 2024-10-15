import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { WeatherContext } from "../context/context.jsx";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
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
  const settingCity = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-col  ">
      <div className="p-4 w-full bg-slate-800 rounded-md sm:rounded-lg grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6">
        <div className="flex items-center justify-center sm:col-span-3 lg:col-span-2">
          <Link className="">
            <img
              onClick={() => setMenuIcon(!menuIcon)}
              className={`w-8 ${menuIcon ? "hidden" : "block"} sm:hidden`}
              src={assets.menu_bar}
            />
            <img
              onClick={() => setMenuIcon(!menuIcon)}
              className={`w-8 ${menuIcon ? "block" : "hidden"} sm:hidden`}
              src={assets.menu_close}
            />
          </Link>
          <div className="grid grid-cols-3 gap-6">
            <NavLink
              to="/"
              className=" hidden sm:py-[4px] sm:px-[12px]   sm:hover:bg-[#485d72] sm:rounded-md sm:flex sm:items-center sm:justify-center "
            >
              <img className={` w-8  `} src={assets.menu_cloud} />
            </NavLink>
            <NavLink
              to="/city"
              className="hidden sm:py-[4px] sm:px-[12px]   sm:hover:bg-[#485d72] sm:rounded-md sm:flex sm:items-center sm:justify-center  "
            >
              <img className={`w-8 hidden sm:block `} src={assets.menu_city} />
            </NavLink>
            <NavLink
              to="/others"
              className="hidden sm:py-[4px] sm:px-[12px]   sm:hover:bg-[#485d72] sm:rounded-md sm:flex sm:items-center sm:justify-center "
            >
              <img
                className={`w-8 hidden sm:block `}
                src={assets.menu_options}
              />
            </NavLink>
          </div>
        </div>
        <input
          className=" col-span-3 sm:col-span-2 outline-none bg-slate-300 rounded-md pl-4 text-gray-700 placeholder-slate-500"
          type="text"
          onKeyDown={settingCity}
          placeholder="Search for city"
        />
      </div>
      <div
        className={` ${
          menuIcon ? "block" : "hidden"
        }  absolute top-[11vh] transform transition-all duration-1000 bg-slate-500 w-fit px-4 py-2 mt-2 rounded-md flex flex-col sm:hidden`}
      >
        <NavLink
          onClick={() => setMenuIcon(!menuIcon)}
          to="/"
          className="mt-1 mb-1 px-4 rounded-md flex items-center gap-1 hover:bg-gray-600"
        >
          <img src={assets.menu_cloud} className="w-8 mt-1 mb-1" />
          <p className=" text-sm text-gray-950">Weather</p>
        </NavLink>
        <NavLink
          onClick={() => setMenuIcon(!menuIcon)}
          to="/city"
          className="mt-1 mb-1 px-4 rounded-md flex items-center gap-1  hover:bg-gray-600"
        >
          <img src={assets.menu_city} className="w-8 mt-1 mb-1 " />
          <p className=" text-sm text-gray-950">City</p>
        </NavLink>
        <NavLink
          to="/others"
          onClick={() => setMenuIcon(!menuIcon)}
          className="mt-1 mb-1 px-4 rounded-md flex items-center gap-1  hover:bg-gray-600"
        >
          <img src={assets.menu_options} className="w-8  " />
          <p className=" text-sm text-gray-950">Others</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
