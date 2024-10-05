import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar';


const App = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-10 lg:px-12 py-4 ">
      <Navbar />
    </div>
  );
}

export default App