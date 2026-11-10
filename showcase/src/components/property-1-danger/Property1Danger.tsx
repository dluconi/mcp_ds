import React from 'react';
import './property-1-danger.css';
import icon from './assets/property.svg';

export const Property1Danger: React.FC = () => {
  return (
    <div className="ds-component ds-property-1-danger">
      <img src={icon} className="h-full w-auto object-contain" alt="Property 1=danger" />
    </div>
  );
};
