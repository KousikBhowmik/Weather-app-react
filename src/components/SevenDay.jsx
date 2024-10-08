import React from 'react'
import { assets } from '../assets/assets.js';

const SevenDay = () => {
  return (
    <div className=" md:col-span-2 flex flex-col h-fit gap-4 p-5 md:p-6 rounded-md md:rounded-lg bg-slate-800">
      <p className='text-sm text-slate-400'>7-DAY FORECAST</p>
      <div className='gap-8 flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:flex md:flex-col md:gap-8'>
        <div className='flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 '>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 '>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 '>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 '>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 '>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 '>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between sm:bg-slate-600 sm:p-6 sm:rounded-md md:flex md:items-center md:justify-between md:bg-transparent md:p-2 '>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default SevenDay