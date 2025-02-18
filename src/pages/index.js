// src/pages/index.js
import { useState } from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import SolutionPage from '../components/SolutionPage';
import ContactPage from '../components/ContactPage';

export default function Home() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen relative">
      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/pictures/power.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay to make content more readable */}
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <Navigation 
          language={language}
          setLanguage={setLanguage}
        />
        
        {/* Home Section */}
        <section id="home" className="scroll-mt-20">
          <HomePage language={language} />
        </section>

        {/* Solution Section */}
        <section id="solution" className="scroll-mt-20">
          <SolutionPage language={language} />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <AboutPage language={language} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <ContactPage language={language} />
        </section>
      </div>
    </div>
  );
}