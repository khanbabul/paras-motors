import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Star } from 'lucide-react';
import babulImage from '../assets/images/babul.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${babulImage})`,
        }}
      >
        <div className="absolute bg-black bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
            {/* <span className="text-sm font-medium">Premium Automotive Services</span> */}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Car Repair</span>
            <span className="block text-blue-400">& Maintenance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Paras Motor Werk Shop is a trusted automotive service center specializing in high-quality repair and maintenance for a wide range of popular vehicles. Whether you drive a Toyota Corolla, Toyota Core, Suzuki Alto, Suzuki Cultus, Suzuki Mehran, Suzuki FX, or any other local or imported car, the workshop provides expert solutions tailored to your vehicle’s needs. From minor fixes to major overhauls, they deliver dependable workmanship at affordable prices.
          </p>

          {/* Brands */}
          <div className="mb-8">
            {/* <p className="text-lg mb-4 text-gray-300">We Service:</p> */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base">
              <span className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-black">Corolla</span>
              <span className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-black">Core</span>
              <span className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-black">Alto</span>
              <span className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-black">Cultus</span>
              <span className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-black">FX</span>
              <span className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-black">Shehzor</span>
              <span className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-black">Suzuki Bolan</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services"><Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group transition-all duration-300"
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button></a>
            <a href="#contact"><Button 
              variant="outline" 
              size="lg" 
              className="border-white text-black hover:bg-white hover:text-gray-900 px-8 py-3 text-lg transition-all duration-300"
            >
              Contact Us
            </Button></a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white border-opacity-20">
            {/* <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white-400 mb-2">1000+</div>
              <div className="text-gray-300">Cars Serviced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white-400 mb-2">100%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <a href="#about"><div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;