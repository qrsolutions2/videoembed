import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md h-full">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{description}</p>
  </div>
);

export default Feature;