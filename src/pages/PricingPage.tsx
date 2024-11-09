import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'pricing-table-id': string;
        'publishable-key': string;
        'client-reference-id'?: string;
      };
    }
  }
}

const PricingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle VIP button click
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data.type === 'checkout-button-clicked' && 
        event.data.productName === 'VIP'
      ) {
        // Navigate to home page with contact form flag
        navigate('/?scrollToContact=true');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-gray-600">Select the plan that best fits your needs</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <stripe-pricing-table 
            pricing-table-id="prctbl_1QFjokBUDch2erzUaq10CKTm"
            publishable-key="pk_live_51QB1M4BUDch2erzUe4kWyPYgRigLZ0r7m5ueYUpycX9d4EZWHRwUk1fV3oO3j8GXemIF877BMo6zbVuvIR3AEDxi00xEJlOMfW"
            client-reference-id="vip-contact"
          >
          </stripe-pricing-table>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;