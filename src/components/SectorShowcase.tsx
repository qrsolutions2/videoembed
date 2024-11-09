import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectorShowcase: React.FC<{ id: string }> = ({ id }) => {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  
  const sectors = [
    {
      name: 'Property',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      description: 'Streamline property management and enhance buyer experiences with QR codes for virtual tours, property details, and instant contact information. Our QR solutions allow potential buyers to access comprehensive property information, view 360° tours, and even schedule viewings directly from for-sale signs or property listings.',
      expandedImage: 'https://images.unsplash.com/photo-1729863430332-616aaed4390a?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Bicycles',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Enhance customer experience and streamline inventory management in the bicycle industry with QR codes. Provide instant access to product specifications, maintenance guides, and even virtual test rides. Our QR solutions help bike shops and manufacturers connect customers with detailed information about each model, improving sales and customer satisfaction.',
      expandedImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Car Sales',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Revolutionize the car buying experience with QR codes. Provide instant access to vehicle history, specifications, and even schedule test drives directly from the showroom floor or online listings. Our QR solutions help dealerships showcase their inventory more effectively, allowing potential buyers to access detailed information about each vehicle, including pricing, features, and availability.',
      expandedImage: 'https://images.unsplash.com/photo-1729863430352-1fab366c37aa?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Motorcycle',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Elevate the motorcycle shopping experience with QR codes. Offer quick access to bike specifications, performance data, and even virtual sound tests of different models. Our QR solutions enable motorcycle dealerships to provide comprehensive information about each bike, including technical specs, available customizations, and financing options, enhancing the customer\'s decision-making process.',
      expandedImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Jewellery',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Enhance the luxury shopping experience in the jewelry industry with QR codes. Provide customers with detailed information about gemstone origins, craftsmanship, and care instructions. Our QR solutions allow jewelry stores to showcase the unique features of each piece, including 360-degree views, certification details, and even virtual try-on experiences, elevating the customer\'s engagement with high-end products.',
      expandedImage: 'https://images.unsplash.com/photo-1729863430330-9815c9e15712?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Asset & Safety Management',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      description: 'Improve site safety and project management in the construction industry with QR codes. Provide instant access to safety protocols, equipment manuals, and project timelines. Our QR solutions help construction companies streamline operations by offering quick access to building plans, material specifications, and safety guidelines, enhancing on-site efficiency and compliance.',
      expandedImage: 'https://images.unsplash.com/photo-1729863571301-f234481e4f38?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  const toggleSector = (sectorName: string) => {
    if (expandedSector === sectorName) {
      setExpandedSector(null);
    } else {
      setExpandedSector(sectorName);
    }
  };

  const closeSector = () => {
    setExpandedSector(null);
  };

  return (
    <section id={id} className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">A few use cases</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Here are just a few examples of different sectors that benefit from our services, this is not an exhaustive list but we can cater for all if you want and interactive menu for example we've got you covered!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                expandedSector && expandedSector !== sector.name ? 'opacity-70' : ''
              }`}
              onClick={() => toggleSector(sector.name)}
            >
              <img 
                src={sector.image} 
                alt={sector.name} 
                className="w-full h-48 object-cover rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg hover:bg-opacity-30 transition-all duration-300">
                <span className="text-white text-xl font-semibold">{sector.name}</span>
              </div>
              {expandedSector === sector.name ? (
                <ChevronUp className="absolute bottom-2 right-2 text-white" />
              ) : (
                <ChevronDown className="absolute bottom-2 right-2 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>

      {expandedSector && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" 
          onClick={closeSector}
        >
          <div 
            className="bg-white text-black rounded-lg max-w-4xl w-full relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeSector}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X size={24} />
            </button>
            {sectors.map((sector) => {
              if (sector.name === expandedSector) {
                return (
                  <div key={sector.name} className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{sector.name}</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={sector.expandedImage}
                        alt={sector.name}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700 mb-4">{sector.description}</p>
                        {sector.name === 'Asset & Safety Management' ? (
                          <Link
                            to="/asset-safety"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                          >
                            Learn More
                          </Link>
                        ) : (
                          <Link
                            to="/pricing"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                          >
                            View Plans
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default SectorShowcase;