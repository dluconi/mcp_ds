import React from 'react';
import './brand-comolatti.css';
import icon from './assets/brand.svg';

export const BrandComolatti: React.FC = () => {
  return (
    <div className="ds-component ds-brand-comolatti">
      <img src={icon} className="h-full w-auto object-contain" alt="brand=comolatti" />
    </div>
  );
};
