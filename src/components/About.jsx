import React from 'react';
import { CheckCircle, Award, Users, Wrench } from 'lucide-react';
import garageImage from '../assets/images/professional-garage.jpg';

const About = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Technicians",
      description: "Our team consists of factory-trained and certified automotive technicians with years of experience."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Advanced Equipment",
      description: "We use the latest diagnostic equipment and tools to ensure precise repairs and maintenance."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focused",
      description: "We prioritize customer satisfaction and provide transparent, honest service every time."
    }
  ];

  const benefits = [
    "Factory-recommended maintenance services",
    "Light and heavy vehicle repairs",
    "Competitive pricing vs. dealer rates",
    "Alternative parts options to suit your budget",
    "Complete luxury vehicle restoration",
    "High-performance tuning and modifications"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Paras Motor Workshop</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for luxury automotive care, combining expertise, technology, and passion to deliver exceptional service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Vehicle Repair, Maintenance, and Tuning of Luxury Sports Cars
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Paras Motor Werk Shop specializes in vehicle repair and maintenance for Mercedes-Benz, BMW, Audi, Porsche, Ferrari, Lamborghini, VW, and Bentley. Our capabilities include light and heavy vehicle repairs and factory-recommended maintenance services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From routine service and maintenance to high-performance work, wheel and tire services, and collision and restoration service, we are the only luxury service center offering ALL of these services under one roof.
            </p>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={garageImage} 
              alt="Professional automotive garage" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">State-of-the-Art Facility</h4>
              <p className="text-gray-200">Modern equipment and professional workspace</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Paras Motor Werk Shop?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine expertise, technology, and passion to deliver exceptional automotive care for your luxury vehicle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-300">Vehicles Serviced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Certified Technicians</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

