// src/components/Navigation.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { translations } from '../translations/translations';
import Logo from './Logo';

const Navigation = ({ currentPage, setCurrentPage, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <nav className="fixed w-full z-10 bg-blue-900 bg-opacity-90 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2">
              <Logo size={8} />
              <span className="text-2xl font-bold text-blue-300">Voltellum</span>
            </button>
            
            {/* Language Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-blue-300 hover:text-blue-100 ${language === 'en' ? 'underline' : ''}`}
              >
                En
              </button>
              <span className="text-blue-300">|</span>
              <button 
                onClick={() => setLanguage('sv')}
                className={`text-blue-300 hover:text-blue-100 ${language === 'sv' ? 'underline' : ''}`}
              >
                Sv
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-blue-300">
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setCurrentPage('home')} className="text-blue-300 hover:text-blue-100">{t.nav.home}</button>
              <button onClick={() => setCurrentPage('about')} className="text-blue-300 hover:text-blue-100">{t.nav.about}</button>
              <button onClick={() => setCurrentPage('solution')} className="text-blue-300 hover:text-blue-100">{t.nav.solution}</button>
              <button onClick={() => setCurrentPage('contact')} className="text-blue-300 hover:text-blue-100">{t.nav.contact}</button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-900 p-4 rounded">
            <div className="flex flex-col space-y-4">
              <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="text-blue-300 hover:text-blue-100 text-left">{t.nav.home}</button>
              <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="text-blue-300 hover:text-blue-100 text-left">{t.nav.about}</button>
              <button onClick={() => { setCurrentPage('solution'); setIsMenuOpen(false); }} className="text-blue-300 hover:text-blue-100 text-left">{t.nav.solution}</button>
              <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="text-blue-300 hover:text-blue-100 text-left">{t.nav.contact}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;