import React, { useState } from "react";
import Logo from "../MovieLogo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ watchlist = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Movies", path: "/" },
    { name: "Watchlist", path: "/watchlist" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            className="w-10 hover:scale-105 transition duration-300"
            src={Logo}
            alt="Logo"
          />
          <span className="text-xl font-bold text-gray-800">
            IMDB
          </span>
        </Link>


        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lg font-medium transition duration-300 ${
                location.pathname === link.path
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded-full"></span>
              )}


              {link.name === "Watchlist" && watchlist.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {watchlist.length}
                </span>
              )}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg text-gray-700 font-medium hover:text-black transition"
            >
              {link.name}
              {link.name === "Watchlist" && watchlist.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {watchlist.length}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
