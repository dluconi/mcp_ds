import React from 'react';
import './variants-focus.css';
import icon from './assets/variants.svg';

export const VariantsFocus: React.FC = () => {
  return (
    <div className="ds-component ds-variants-focus">
      <img src={icon} className="h-full w-auto object-contain" alt="variants=focus" />
    </div>
  );
};
