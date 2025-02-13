// src/pages/SolutionPage.js
import React from 'react';
import { Battery, Shield, TrendingUp, AlertTriangle, Sun, Building } from 'lucide-react';
import { translations } from '../translations/translations';

const SolutionPage = ({ language }) => {
  const t = translations[language];
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">{t.solution.title}</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.solution.techSpecs}</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Battery className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>{t.solution.storage}</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>{t.solution.protection}</span>
              </li>
              <li className="flex items-start">
                <Sun className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>{t.solution.renewable}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.solution.benefits}</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <span>{t.solution.revenue}</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1" />
                <span>{t.solution.crisis}</span>
              </li>
              <li className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>{t.solution.infrastructure}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;