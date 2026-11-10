import React from 'react';
import './brand-pellegrino.css';
import icon from './assets/brand.svg';

export const BrandPellegrino: React.FC = () => {
  return (
    <div className="ds-component ds-brand-pellegrino">
      <img src={icon} className="h-full w-auto object-contain" alt="brand=pellegrino" />
    </div>
  );
};
