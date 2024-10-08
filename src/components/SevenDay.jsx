import React from 'react'
import { assets } from '../assets/assets.js';

const SevenDay = () => {
  return (
    <div className=" md:col-span-2 flex flex-col h-fit gap-4 p-5 md:p-6 rounded-md md:rounded-lg bg-slate-800">
      <p className='text-sm text-slate-400'>7-DAY FORECAST</p>
      <div className='gap-10 flex flex-col'>
        <div className='flex items-center justify-between'>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-slate-300'>Today</p>
          <img className='w-8' src={assets.temp_icon} />
          <div className="flex items-center justify-center">
            <p className='text-slate-300'>30</p>
            <p className='text-slate-500'>/25</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
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