import React from 'react';
import './variant-default.css';
import icon from './assets/variant.svg';

export const VariantDefault: React.FC = () => {
  return (
    <div className="ds-component ds-variant-default">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=default" />
    </div>
  );
};
