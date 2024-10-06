import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menuIcon , setMenuIcon] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="p-4 w-full bg-blue-950 rounded-md sm:rounded-lg flex items-center gap-3 sm:justify-around">
        <div className="flex gap-2 sm:gap-10">
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
        <div>
          <input
            className="outline-none bg-white rounded-md min-w-[90%] md:w-[300px] lg:w-[400px] pl-4 text-gray-700 sm:h-8 h-7"
            type="text"
            placeholder="Search here..."
          />
        </div>
      </div>
      <div className={` ${menuIcon? "block": "hidden"}  absolute top-[11vh] bg-slate-500 w-fit px-4 py-2 mt-2 rounded-md flex flex-col sm:hidden`}>
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
