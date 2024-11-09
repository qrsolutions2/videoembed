import React from 'react';
import { CheckCircle } from 'lucide-react';
import Feature from './Feature';
import IndustryCard from './IndustryCard';
import FAQItem from './FAQItem';
import ContactForm from './ContactForm';
import { features, sectors, faqs } from './data';

const AssetSafetyManagement: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4">
        <div className="py-8">
          <h1 className="text-4xl font-bold">Asset and Safety Management</h1>
        </div>
        
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-4">
                Enhance your organization's asset management and safety protocols with our QR-based solutions. 
                Streamline processes, improve compliance, and boost overall efficiency.
              </p>
              <p className="text-lg mb-4">
                Have a local code to your asset which can display a custom landing page containing relevant information. 
                Our system allows you to manage and track all your assets efficiently while maintaining the highest safety standards.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://i.imgur.com/Z7olDLR.png" 
                alt="Asset Management Dashboard" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((sector) => (
              <IndustryCard key={sector.name} {...sector} />
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '1. Generate QR Codes',
                description: 'Create unique QR codes for your assets and safety checkpoints using our intuitive dashboard.'
              },
              {
                title: '2. Deploy and Scan',
                description: 'Place QR codes on assets and at key locations. Employees can easily scan codes with their smartphones.'
              },
              {
                title: '3. Manage and Monitor',
                description: 'Access real-time data, generate reports, and update information instantly through our central platform.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </section>
        
        <ContactForm />
      </main>
    </div>
  );
};

export default AssetSafetyManagement;