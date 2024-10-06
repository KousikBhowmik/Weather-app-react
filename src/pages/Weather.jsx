import React from "react";
import { assets } from "../assets/assets";

const Weather = () => {
  return (
    <div className=" flex flex-col sm:flex-row sm:gap-[6%] pt-4 ">
      <div className="flex flex-col gap-3">
        <div className="flex  flex-col-reverse items-center p-4 bg-slate-800 rounded-md">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <h1 className="font-semibold text-2xl text-white">Barcelona</h1>
              <p className="text-sm text-slate-500">Chance of rain 0%</p>
            </div>
            <h1 className="font-semibold text-4xl text-white">00°</h1>
          </div>
          <img className="w-[100px] mb-3" src={assets.temp_icon} />
        </div>
        <div className="flex flex-col p-4 bg-slate-800 rounded-md gap-2">
          <p className="text-sm font-semibold text-slate-500">TODAY'S FORECASE</p>
          <div className="flex flex-wrap justify-between sm:justify-normal ">
            <div className="flex flex-col items-center gap-4 mr-[20px] pr-4 ">
              <p className="text-slate-400">6:00 AM</p>
              <div>
                <img className="w-10" src={assets.temp_icon} />
              </div>
              <h2 className="font-semibold text-white">25°</h2>
            </div>
            <div className="flex flex-col items-center gap-4 mr-[20px] pr-4 ">
              <p className="text-slate-400">6:00 AM</p>
              <div>
                <img className="w-10" src={assets.temp_icon} />
              </div>
              <h2 className="font-semibold text-white">25°</h2>
            </div>
            <div className="flex flex-col items-center gap-4 mr-[20px] pr-4 ">
              <p className="text-slate-400">6:00 AM</p>
              <div>
                <img className="w-10" src={assets.temp_icon} />
              </div>
              <h2 className="font-semibold text-white">25°</h2>
            </div>
            <div className="flex flex-col items-center gap-4 mr-[20px] pr-4 ">
              <p className="text-slate-400">6:00 AM</p>
              <div>
                <img className="w-10" src={assets.temp_icon} />
              </div>
              <h2 className="font-semibold text-white">25°</h2>
            </div>
            <div className="flex flex-col items-center gap-4 mr-[20px] pr-4 ">
              <p className="text-slate-400">6:00 AM</p>
              <div>
                <img className="w-10" src={assets.temp_icon} />
              </div>
              <h2 className="font-semibold text-white">25°</h2>
            </div>
            <div className="flex flex-col items-center gap-4 mr-[20px] pr-4 ">
              <p className="text-slate-400">6:00 AM</p>
              <div>
                <img className="w-10" src={assets.temp_icon} />
              </div>
              <h2 className="font-semibold text-white">25°</h2>
            </div>
            
          </div>
        </div> 
        <div className="">
          <p className="">AIR CONDITIONS</p>
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <p></p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-white ">
        <p></p>
        <div>
          <div>
            <p></p>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
