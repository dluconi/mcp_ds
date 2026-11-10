import React from 'react';
import './variant-tablet-size-768.css';
import icon from './assets/variant.svg';

export const VariantTabletSize768: React.FC = () => {
  return (
    <div className="ds-component ds-variant-tablet-size-768">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=tablet, size=768" />
    </div>
  );
};
