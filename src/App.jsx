import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Weather from "./pages/Weather.jsx";
import SevenDay from "./components/SevenDay.jsx";
import City from "./pages/City.jsx";

const App = () => {
  return (
    <div className="bg-[#0d1b2a] min-h-screen px-4 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 ">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 md:gap-6 xl:gap-8 my-5 ">
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/city" element={<City />} />
        </Routes>
        <SevenDay />
      </div>
    </div>
  );
};

export default App;
