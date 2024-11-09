import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background container with diagonal splits */}
      <div className="absolute inset-0 z-0">
        {/* First image section */}
        <div className="absolute left-0 w-1/3 h-full transform -skew-x-12 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1729863430330-9815c9e15712?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt=""
            className="absolute h-full w-[150%] object-cover"
          />
        </div>
        
        {/* Middle image section */}
        <div className="absolute left-1/3 w-1/3 h-full transform -skew-x-12 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1729863430332-616aaed4390a?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt=""
            className="absolute h-full w-[150%] object-cover"
          />
        </div>
        
        {/* Last image section */}
        <div className="absolute right-0 w-1/3 h-full transform -skew-x-12 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1729863430352-1fab366c37aa?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt=""
            className="absolute h-full w-[150%] object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            <span className="bg-white bg-opacity-95 px-4 py-2 rounded-lg shadow-lg inline-block">
              Welcome to QRSolutions
            </span>
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-95 px-4 py-3 rounded-lg shadow-lg">
                <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                  QRSolutions is a cutting-edge QR code management service platform, designed for businesses like real estate agents and car sales, but suitable for any product requiring fast, accessible information. Our white label solution enables custom QR codes linking directly to your websites, streamlining sales processes and enhancing customer engagement by providing instant access to vital information with a quick scan.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-95 p-3 rounded-lg shadow-lg">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    src="https://share.synthesia.io/embeds/videos/41eeb622-8161-4999-9817-c984b610c5ac" 
                    loading="lazy" 
                    title="Synthesia video player - Effortless QR Code Management" 
                    allowFullScreen 
                    allow="encrypted-media; fullscreen;" 
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;