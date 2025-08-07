import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-4 px-6 bg-transparent">
      <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-full px-8 py-3 flex items-center justify-between w-full max-w-5xl">
        <div className="flex items-center space-x-2">
          <img
            src="https://st4.depositphotos.com/10376142/29967/v/450/depositphotos_299674564-stock-illustration-white-online-hotel-booking-icon.jpg"
            alt="logo"
            className="h-6 w-6"
          />
          <span className="text-blue-800 font-bold text-lg">StaySpot</span>
        </div>

        <div className="flex space-x-6 text-blue-800 font-medium">
          <Link to="/">HOME</Link>
          <Link to="/">Destinations</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/about">About us</Link>
        </div>

        <div className="flex space-x-3">
          <Link
            to="/signup"
            className="bg-white text-blue-800 font-semibold px-4 py-1 rounded-full shadow-md hover:bg-blue-100 transition"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-800 font-semibold px-4 py-1 rounded-full shadow-md hover:bg-blue-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
