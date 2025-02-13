import { useState } from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import SolutionPage from '../components/SolutionPage';
import ContactPage from '../components/ContactPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutPage language={language} />;
      case 'solution':
        return <SolutionPage language={language} />;
      case 'contact':
        return <ContactPage language={language} />;
      default:
        return <HomePage language={language} />;
    }
  };

  return (
    // Added text-gray-900 for default dark text color while preserving specific color classes in components
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="text-inherit">
        <Navigation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          language={language}
          setLanguage={setLanguage}
        />
        {renderPage()}
      </div>
    </div>
  );
}