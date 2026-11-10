import React from 'react';
import './variants-disabled.css';
import icon from './assets/variants.svg';

export const VariantsDisabled: React.FC = () => {
  return (
    <div className="ds-component ds-variants-disabled">
      <img src={icon} className="h-full w-auto object-contain" alt="variants=disabled" />
    </div>
  );
};
