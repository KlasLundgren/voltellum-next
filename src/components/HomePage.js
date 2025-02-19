// src/components/HomePage.js
import React from 'react';
import { Battery, Shield, TrendingUp, AlertTriangle, Sun, Building } from 'lucide-react';
import { translations } from '../translations/translations';
import Logo from '../components/Logo';

const HomePage = ({ language }) => {
  const t = translations[language];
  
  return (
    <div>
      {/* Hero Section */}
      <header className="relative text-blue-900 min-h-screen bg-white/80">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center pt-24">
            <img 
              src="/pictures/name.png"   
              alt="name" 
              className="w-100 h-150"
            />
            <img 
              src="/pictures/logo.png"   
              alt="Logo" 
              className="w-60 h-50"
            />
            <p className="text-3xl mb-12 max-w-3xl mx-auto font-light z-10">{t.home.tagline}</p>
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
                <h2 className="text-2xl font-bold text-gray-900">{t.home.peacetime}</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-900">
                  <Sun className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>{t.home.smartEnergy}</span>
                </li>
                <li className="flex items-start text-gray-900">
                  <Building className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>{t.home.fortressGrade}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{t.home.emergencyPreparedness}</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-900">
                  <Shield className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  <span>{t.home.securedPower}</span>
                </li>
                <li className="flex items-start text-gray-900">
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