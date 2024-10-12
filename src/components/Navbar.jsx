import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { WeatherContext } from "../context/context.jsx";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { weather, city, setCity } = useContext(WeatherContext);
  const settingCity = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 w-full bg-slate-800 rounded-md sm:rounded-lg grid grid-cols-4 md:grid-cols-6">
        <div className="flex items-center justify-center sm:col-span-2">
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
            <Link>
              <img className="w-8 hidden sm:block" src={assets.menu_cloud} />
            </Link>
            <Link>
              <img className="w-8 hidden sm:block" src={assets.menu_city} />
            </Link>
            <Link>
              <img className="w-8 hidden sm:block" src={assets.menu_options} />
            </Link>
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
        <Link className="mt-1 mb-1 flex items-center gap-1">
          <img src={assets.menu_cloud} className="w-8 mt-1 mb-1" />
          <p className=" text-sm text-gray-950">Weather</p>
        </Link>
        <Link className="mt-1 mb-1 flex items-center gap-1">
          <img src={assets.menu_city} className="w-8 mt-1 mb-1 " />
          <p className=" text-sm text-gray-950">City</p>
        </Link>
        <Link className="mt-1 mb-1 flex items-center gap-1">
          <img src={assets.menu_options} className="w-8  " />
          <p className=" text-sm text-gray-950">Options</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
