import React from 'react';
import './variants-hover.css';
import icon from './assets/variants.svg';

export const VariantsHover: React.FC = () => {
  return (
    <div className="ds-component ds-variants-hover">
      <img src={icon} className="h-full w-auto object-contain" alt="variants=hover" />
    </div>
  );
};
