import React from 'react';
import './brand-base.css';
import icon from './assets/brand.svg';

export const BrandBase: React.FC = () => {
  return (
    <div className="ds-component ds-brand-base">
      <img src={icon} className="h-full w-auto object-contain" alt="brand=base" />
    </div>
  );
};
