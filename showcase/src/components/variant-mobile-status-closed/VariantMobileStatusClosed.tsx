import React from 'react';
import './variant-mobile-status-closed.css';
import icon from './assets/variant.svg';

export const VariantMobileStatusClosed: React.FC = () => {
  return (
    <div className="ds-component ds-variant-mobile-status-closed">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=mobile, Status=closed" />
    </div>
  );
};
