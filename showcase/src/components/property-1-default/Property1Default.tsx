import React from 'react';
import './property-1-default.css';
import icon from './assets/property.svg';

export const Property1Default: React.FC = () => {
  return (
    <div className="ds-component ds-property-1-default">
      <img src={icon} className="h-full w-auto object-contain" alt="Property 1=Default" />
    </div>
  );
};
