import React from 'react';
import './property-1-mobile.css';
import icon from './assets/property.svg';

export const Property1Mobile: React.FC = () => {
  return (
    <div className="ds-component ds-property-1-mobile">
      <img src={icon} className="h-full w-auto object-contain" alt="Property 1=mobile" />
    </div>
  );
};
