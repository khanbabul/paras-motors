import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Calendar, Gauge, Fuel, Users, ArrowRight, Star } from 'lucide-react';

const Inventory = () => {
  const vehicles = [
    {
      id: 1,
      brand: "BMW",
      model: "M4 Competition",
      year: 2023,
      price: "$89,900",
      mileage: "12,500",
      fuel: "Gasoline",
      transmission: "Automatic",
      seats: 4,
      image: "/api/placeholder/400/300",
      features: ["Carbon Fiber Package", "M Performance Exhaust", "Adaptive Suspension"],
      condition: "Excellent",
      rating: 5
    },
    {
      id: 2,
      brand: "Mercedes-Benz",
      model: "AMG GT 63 S",
      year: 2022,
      price: "$165,000",
      mileage: "8,200",
      fuel: "Gasoline",
      transmission: "Automatic",
      seats: 4,
      image: "/api/placeholder/400/300",
      features: ["AMG Performance Package", "Carbon Ceramic Brakes", "Premium Interior"],
      condition: "Like New",
      rating: 5
    },
    {
      id: 3,
      brand: "Audi",
      model: "RS6 Avant",
      year: 2023,
      price: "$125,500",
      mileage: "5,800",
      fuel: "Gasoline",
      transmission: "Automatic",
      seats: 5,
      image: "/api/placeholder/400/300",
      features: ["Dynamic Package", "Sport Exhaust", "Quattro AWD"],
      condition: "Excellent",
      rating: 5
    },
    {
      id: 4,
      brand: "Porsche",
      model: "911 Turbo S",
      year: 2022,
      price: "$215,000",
      mileage: "3,200",
      fuel: "Gasoline",
      transmission: "PDK",
      seats: 4,
      image: "/api/placeholder/400/300",
      features: ["Sport Chrono Package", "PCCB Brakes", "Sport Exhaust"],
      condition: "Like New",
      rating: 5
    },
    {
      id: 5,
      brand: "Ferrari",
      model: "F8 Tributo",
      year: 2021,
      price: "$325,000",
      mileage: "2,100",
      fuel: "Gasoline",
      transmission: "Automatic",
      seats: 2,
      image: "/api/placeholder/400/300",
      features: ["Carbon Fiber Package", "Racing Seats", "Premium Audio"],
      condition: "Pristine",
      rating: 5
    },
    {
      id: 6,
      brand: "Lamborghini",
      model: "Huracán EVO",
      year: 2022,
      price: "$285,000",
      mileage: "1,800",
      fuel: "Gasoline",
      transmission: "Automatic",
      seats: 2,
      image: "/api/placeholder/400/300",
      features: ["Performance Package", "Carbon Interior", "Lifting System"],
      condition: "Pristine",
      rating: 5
    }
  ];

  return (
    <section id="inventory" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Inventory</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated selection of premium luxury and high-performance vehicles, each meticulously inspected and maintained to the highest standards.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Brands</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Audi</option>
              <option>Porsche</option>
              <option>Ferrari</option>
              <option>Lamborghini</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Price Range</option>
              <option>Under $100k</option>
              <option>$100k - $200k</option>
              <option>$200k - $300k</option>
              <option>Over $300k</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Year</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Search Inventory
            </Button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Vehicle Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl font-bold">{vehicle.brand}</div>
                    <div className="text-lg">{vehicle.model}</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.condition}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex">
                  {[...Array(vehicle.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{vehicle.year} {vehicle.brand} {vehicle.model}</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-1">{vehicle.price}</p>
                  </div>
                </div>

                {/* Vehicle Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Gauge className="w-4 h-4" />
                    <span>{vehicle.mileage} miles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.seats} seats</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {vehicle.features.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{vehicle.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="px-4">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Load More Vehicles
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for Something Specific?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Can't find the perfect vehicle in our current inventory? Let us know what you're looking for and we'll help you find it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Request Vehicle
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Sell Your Vehicle
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;

