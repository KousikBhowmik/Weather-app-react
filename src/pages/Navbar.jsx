import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="p-4 w-full bg-blue-950">
        <div>full size menu</div>
        <div>input box</div>
      </div>
      <div className="bg-slate-500 w-fit px-4 py-2 mt-2 rounded-md flex flex-col sm:hidden">
        <Link>
          <img src={assets.menu_cloud} className="w-8 mt-1 mb-1" />
        </Link>
        <Link>
          <img src={assets.menu_city} className="w-8 mt-1 mb-1 " />
        </Link>
        <Link className="mt-1 mb-1">
          <img src={assets.menu_options} className="w-8  " />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
