import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { useCart } from '../context/CartContext';
import Search from './Search';

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-blue-500 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        
        {/* Logo */}
        <div className="text-white font-bold text-2xl md:text-3xl">
          <NavLink to="/">Trendify</NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-white text-lg font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-black" : "hover:text-black"}>Home</NavLink>
          <NavLink to="/collection" className={({ isActive }) => isActive ? "text-black" : "hover:text-black"}>Collection</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-black" : "hover:text-black"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-black" : "hover:text-black"}>Contact</NavLink>
        </div>

        {/* Icons & Search */}
        <div className="flex items-center gap-6 text-white text-2xl md:text-3xl relative">
          
          {/* Search toggle */}
          <div className="relative">
            <FaSearch
              className="cursor-pointer hover:text-amber-300 transition"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <div className="absolute top-full right-0 mt-2">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
            )}
          </div>

          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <FaCartPlus className="cursor-pointer hover:text-amber-300 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Login */}
          <NavLink to="/login">
            <IoPerson className="cursor-pointer hover:text-amber-300 transition" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
