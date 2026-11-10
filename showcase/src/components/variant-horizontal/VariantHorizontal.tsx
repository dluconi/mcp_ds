import React from 'react';
import './variant-horizontal.css';
import icon from './assets/variant.svg';

export const VariantHorizontal: React.FC = () => {
  return (
    <div className="ds-component ds-variant-horizontal">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=horizontal" />
    </div>
  );
};
