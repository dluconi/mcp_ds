import React from 'react';
import './brand-br-autoparts.css';
import icon from './assets/brand.svg';

export const BrandBrAutoparts: React.FC = () => {
  return (
    <div className="ds-component ds-brand-br-autoparts">
      <img src={icon} className="h-full w-auto object-contain" alt="brand=br_autoparts" />
    </div>
  );
};
