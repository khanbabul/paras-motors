import React, { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center space-x-1">
                {/* <Phone className="w-4 h-4" /> */}
                <span></span>
              </div>
              <div className="flex items-center space-x-1">
                {/* <Clock className="w-4 h-4" /> */}
                <span></span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {/* <MapPin className="w-4 h-4" /> */}
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">Paras</span>
              <span className="text-white"> Motor</span>
              <span className="text-blue-400"> Workshop</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="#gallery" className="hover:text-blue-400 transition-colors duration-300">Gallery</a>
            <a href="#inventory" className="hover:text-blue-400 transition-colors duration-300">Inventory</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-400 transition-colors duration-300" onClick={toggleMenu}>Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors duration-300" onClick={toggleMenu}>About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors duration-300" onClick={toggleMenu}>Services</a>
              <a href="#gallery" className="hover:text-blue-400 transition-colors duration-300" onClick={toggleMenu}>Gallery</a>
              <a href="#inventory" className="hover:text-blue-400 transition-colors duration-300" onClick={toggleMenu}>Inventory</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

