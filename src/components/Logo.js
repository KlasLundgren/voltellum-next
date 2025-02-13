// src/components/Logo.js
import React from 'react';

const Logo = ({ size = 8 }) => (
  <div className={`w-${size} h-${size}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path 
        d="M50 5 L90 20 V45 C90 65 73 83 50 95 C27 83 10 65 10 45 V20 L50 5Z" 
        fill="#FBBF24" 
        stroke="#FBBF24" 
        strokeWidth="1"
      />
      <path 
        d="M55 30 L35 50 L48 55 L45 70 L65 50 L52 45 L55 30Z" 
        fill="#1E3A8A"
        stroke="#1E3A8A"
        strokeWidth="0.5"
      />
      <path 
        d="M50 5 L90 20 V45 C90 65 73 83 50 95 C27 83 10 65 10 45 V20 L50 5Z" 
        fill="none" 
        stroke="#F59E0B" 
        strokeWidth="1"
      />
    </svg>
  </div>
);

export default Logo;