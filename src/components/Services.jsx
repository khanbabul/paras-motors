import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { 
  Wrench, 
  Car, 
  Palette, 
  Zap, 
  Settings, 
  RotateCcw,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import workshopImage from '../assets/images/workshop-modern.jpg';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Vehicle Repair & Maintenance",
      description: "Comprehensive repair and maintenance services for all luxury vehicle brands, including light and heavy vehicle repairs and factory-recommended maintenance.",
      features: [
        "Engine diagnostics and repair",
        "Transmission services",
        "Brake system maintenance",
        "Electrical system repair"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Collision, Paint & Body Center",
      description: "Full-service collision repair with sophisticated diagnostic equipment to restore computer control systems and mechanical systems back to factory specifications.",
      features: [
        "Collision damage repair",
        "Paint matching and refinishing",
        "Body panel replacement",
        "Frame straightening"
      ]
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Luxury Vehicle Restoration",
      description: "Complete restoration services including in-house upholstery work, carpeting, metal fabrication, and trim work specialized for luxury vehicles.",
      features: [
        "Interior restoration",
        "Metal fabrication",
        "Trim and detail work",
        "Classic car restoration"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance Tuning",
      description: "We build some of the fastest luxury vehicles in the area, from V12 swaps to coil-over suspension systems and electronic performance calibration.",
      features: [
        "Engine performance tuning",
        "Suspension upgrades",
        "Exhaust system installation",
        "ECU calibration"
      ]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Wheel and Tire Specialists",
      description: "Complete wheel refinishing services for both structural and cosmetic damage. We are also a certified Tire Rack Installation Facility.",
      features: [
        "Wheel refinishing",
        "Tire installation",
        "Wheel balancing",
        "Custom wheel fitting"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Alignment Services",
      description: "Complete Hunter Pro aligner with digital cameras, DSP digital mount heads and the latest manufacturer vehicle specifications.",
      features: [
        "4-wheel alignment",
        "Suspension geometry",
        "Steering calibration",
        "Performance alignment"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete automotive solutions for luxury vehicles under one roof. From routine maintenance to high-performance modifications.
          </p>
        </div>

        {/* Hero Service Section */}
        <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Mercedes-Benz, BMW, Audi, Porsche, Ferrari, Lamborghini, VW, Cadillac, Bentley and more
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                We specialize in luxury and high-performance vehicles, providing expert care with factory-level precision and attention to detail.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">Factory Certified</span>
                <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">Latest Equipment</span>
                <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">Expert Technicians</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={workshopImage} 
                alt="Modern automotive workshop" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300"
              >
                More Info
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Service Your Luxury Vehicle?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule an appointment or get a quote for your automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Schedule Service
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

