import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar';
import Weather from './pages/Weather';


const App = () => {
  return (
    <div className="bg-[#0d1b2a] min-h-screen px-4 sm:px-8 md:px-10 lg:px-12 py-4 ">
      <Navbar />
      <Weather />
    </div>
  );
}

export default App