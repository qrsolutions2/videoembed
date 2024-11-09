import React from 'react';

interface IndustryCardProps {
  name: string;
  image: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, image }) => (
  <div className="relative">
    <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
      <span className="text-white text-lg font-semibold">{name}</span>
    </div>
  </div>
);

export default IndustryCard;