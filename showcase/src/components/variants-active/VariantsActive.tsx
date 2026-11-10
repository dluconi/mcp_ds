import React from 'react';
import './variants-active.css';
import icon from './assets/variants.svg';

export const VariantsActive: React.FC = () => {
  return (
    <div className="ds-component ds-variants-active">
      <img src={icon} className="h-full w-auto object-contain" alt="variants=active" />
    </div>
  );
};
