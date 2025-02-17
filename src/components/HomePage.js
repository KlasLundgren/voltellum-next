// src/components/HomePage.js
import React from 'react';
import { Battery, Shield, TrendingUp, AlertTriangle, Sun, Building } from 'lucide-react';
import { translations } from '../translations/translations';
import Logo from '../components/Logo';

const HomePage = ({ language }) => {
  const t = translations[language];
  
  return (
    <div>
      {/* Hero Section with Bigger Header */}
      <header className="relative text-white min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="/pictures/power.jpg" 
            alt="Bunker background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-32">
          <div className="flex flex-col items-center text-center pt-24">
            <div className="flex items-center gap-6 mb-8">
              <Logo size={20} />
              <h1 className="text-7xl font-bold text-blue-300">Voltellum</h1>
            </div>
            <p className="text-3xl mb-12 max-w-3xl mx-auto font-light">{t.home.tagline}</p>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold">{t.home.peacetime}</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Sun className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>{t.home.smartEnergy}</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>{t.home.fortressGrade}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold">{t.home.emergencyPreparedness}</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  <span>{t.home.securedPower}</span>
                </li>
                <li className="flex items-start">
                  <Battery className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  <span>{t.home.militaryGrade}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;