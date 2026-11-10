import React from 'react';
import './variant-mobile-size-375.css';
import icon from './assets/variant.svg';

export const VariantMobileSize375: React.FC = () => {
  return (
    <div className="ds-component ds-variant-mobile-size-375">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=mobile, size=375" />
    </div>
  );
};
