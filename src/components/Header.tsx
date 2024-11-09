import React, { useState } from 'react';
import { QrCode, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { smoothScroll } from '../utils/smoothScroll';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAssetSafetyPage = location.pathname === '/asset-safety';

  const headerClass = "fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90";
  const linkClass = "text-white hover:text-blue-400 transition-colors duration-300";
  const buttonClass = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300";
  const mobileMenuClass = `absolute top-full left-0 right-0 bg-gray-800 bg-opacity-95 py-4 px-4 space-y-4 shadow-lg transition-all duration-300 ${
    isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
  }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      const headerOffset = 80;
      const elementPosition = contactForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <QrCode className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold text-white">QRSolutions</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {!isHomePage ? (
                <li>
                  <Link to="/" className={linkClass}>Other Solutions</Link>
                </li>
              ) : (
                <>
                  <li><a href="#sectors" onClick={smoothScroll} className={linkClass}>Sectors</a></li>
                  <li><a href="#dashboard" onClick={smoothScroll} className={linkClass}>Dashboard</a></li>
                  <li><a href="#extras" onClick={smoothScroll} className={linkClass}>Extras</a></li>
                  <li><a href="#faq" onClick={smoothScroll} className={linkClass}>FAQ</a></li>
                </>
              )}
              {isAssetSafetyPage ? (
                <li>
                  <button onClick={scrollToContact} className={buttonClass}>
                    Get in Touch
                  </button>
                </li>
              ) : (
                <>
                  <li><Link to="/pricing" className={linkClass}>Pricing</Link></li>
                  <li className="flex flex-col items-end space-y-2">
                    <div className="flex space-x-2">
                      <Link to="/pricing" className={buttonClass}>
                        Sign Up
                      </Link>
                      <a 
                        href="https://www.qrsolutions.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={buttonClass}
                      >
                        Login
                      </a>
                    </div>
                    <Link 
                      to="/asset-safety" 
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Asset & Safety Management →
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <nav className={mobileMenuClass}>
            <ul className="flex flex-col space-y-4">
              {!isHomePage ? (
                <li>
                  <Link to="/" className={linkClass} onClick={closeMenu}>Other Solutions</Link>
                </li>
              ) : (
                <>
                  <li><a href="#sectors" onClick={(e) => { smoothScroll(e); closeMenu(); }} className={linkClass}>Sectors</a></li>
                  <li><a href="#dashboard" onClick={(e) => { smoothScroll(e); closeMenu(); }} className={linkClass}>Dashboard</a></li>
                  <li><a href="#extras" onClick={(e) => { smoothScroll(e); closeMenu(); }} className={linkClass}>Extras</a></li>
                  <li><a href="#faq" onClick={(e) => { smoothScroll(e); closeMenu(); }} className={linkClass}>FAQ</a></li>
                </>
              )}
              {isAssetSafetyPage ? (
                <li>
                  <button 
                    onClick={() => { scrollToContact(); closeMenu(); }} 
                    className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Get in Touch
                  </button>
                </li>
              ) : (
                <>
                  <li><Link to="/pricing" className={linkClass} onClick={closeMenu}>Pricing</Link></li>
                  <li className="space-y-2">
                    <Link 
                      to="/pricing" 
                      className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={closeMenu}
                    >
                      Sign Up
                    </Link>
                    <a 
                      href="https://www.qrsolutions.app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={closeMenu}
                    >
                      Login
                    </a>
                    <Link 
                      to="/asset-safety" 
                      className="block text-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      Asset & Safety Management →
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;