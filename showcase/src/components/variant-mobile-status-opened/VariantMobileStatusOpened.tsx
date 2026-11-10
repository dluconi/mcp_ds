import React from 'react';
import './variant-mobile-status-opened.css';
import icon from './assets/variant.svg';

export const VariantMobileStatusOpened: React.FC = () => {
  return (
    <div className="ds-component ds-variant-mobile-status-opened">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=mobile, Status=opened" />
    </div>
  );
};
