import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import garageInterior from '../assets/images/garage-interior.jpg';
import workshopModern from '../assets/images/workshop-modern.jpg';
import professionalGarage from '../assets/images/professional-garage.jpg';
import luxuryCarsHero from '../assets/images/luxury-cars-hero.jpg';
import luxurySportsCars from '../assets/images/luxury-sports-cars.jpg';
import bmwShowroom from '../assets/images/bmw-showroom.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: garageInterior,
      title: "Modern Garage Interior",
      category: "Facility"
    },
    {
      src: workshopModern,
      title: "Professional Workshop",
      category: "Facility"
    },
    {
      src: professionalGarage,
      title: "Service Bay",
      category: "Facility"
    },
    {
      src: luxuryCarsHero,
      title: "Luxury Sports Cars",
      category: "Vehicles"
    },
    {
      src: luxurySportsCars,
      title: "High-Performance Vehicles",
      category: "Vehicles"
    },
    {
      src: bmwShowroom,
      title: "BMW Service Center",
      category: "Facility"
    }
  ];

  const categories = ["All", "Facility", "Vehicles"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our state-of-the-art facility and some of the luxury vehicles we service.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center pointer-events-auto">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">{image.title}</h4>
                  <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold mb-1">{selectedImage.title}</h4>
                <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Sq Ft Facility</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Service Bays</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Vehicles Monthly</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

