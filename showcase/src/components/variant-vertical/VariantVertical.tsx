import React from 'react';
import './variant-vertical.css';
import icon from './assets/variant.svg';

export const VariantVertical: React.FC = () => {
  return (
    <div className="ds-component ds-variant-vertical">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=vertical" />
    </div>
  );
};
