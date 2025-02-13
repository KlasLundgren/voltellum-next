// src/pages/AboutPage.js
import React from 'react';
import { translations } from '../translations/translations';

const AboutPage = ({ language }) => {
  const t = translations[language];
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">{t.about.title}</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">{t.about.intro}</p>
          <p className="text-lg mb-6">{t.about.mission}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t.about.visionTitle}</h2>
          <p className="text-lg mb-6">{t.about.vision}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;