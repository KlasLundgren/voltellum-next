// src/components/Navigation.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { translations } from '../translations/translations';
import Logo from './Logo';

const Navigation = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-10 bg-gray-100 bg-opacity-90 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2">
            <img 
                src="/pictures/logo.png" 
                alt="Logo" 
                className="w-13 h-11"
              />
            <img 
                src="/pictures/name.png" 
                alt="Name" 
                className="w-15 h-5"
              />
            </button>
            
            {/* Language Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-blue-900 hover:text-blue-100 ${language === 'en' ? 'underline' : ''}`}
              >
                En
              </button>
              <span className="text-blue-900">|</span>
              <button 
                onClick={() => setLanguage('sv')}
                className={`text-blue-900 hover:text-blue-100 ${language === 'sv' ? 'underline' : ''}`}
              >
                Sv
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-blue-900">
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-blue-900 hover:text-blue-100">{t.nav.home}</button>
              <button onClick={() => scrollToSection('solution')} className="text-blue-900 hover:text-blue-100">{t.nav.solution}</button>
              <button onClick={() => scrollToSection('about')} className="text-blue-900 hover:text-blue-100">{t.nav.about}</button>
              <button onClick={() => scrollToSection('contact')} className="text-blue-900 hover:text-blue-100">{t.nav.contact}</button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-900 p-4 rounded">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-blue-900 hover:text-blue-100 text-left">{t.nav.home}</button>
              <button onClick={() => scrollToSection('solution')} className="text-blue-900 hover:text-blue-100 text-left">{t.nav.solution}</button>
              <button onClick={() => scrollToSection('about')} className="text-blue-900 hover:text-blue-100 text-left">{t.nav.about}</button>
              <button onClick={() => scrollToSection('contact')} className="text-blue-900 hover:text-blue-100 text-left">{t.nav.contact}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;