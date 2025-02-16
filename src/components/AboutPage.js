// src/components/AboutPage.js
import React, { useEffect, useState } from 'react';
import { content, parseMarkdown } from '../content/content';

const AboutPage = ({ language }) => {
  const [parsedContent, setParsedContent] = useState('');
  
  useEffect(() => {
    const loadContent = async () => {
      const markdownContent = content[language].about.sections[0].content;
      const htmlContent = await parseMarkdown(markdownContent);
      setParsedContent(htmlContent);
    };
    
    loadContent();
  }, [language]);
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      </div>
    </div>
  );
};

export default AboutPage;