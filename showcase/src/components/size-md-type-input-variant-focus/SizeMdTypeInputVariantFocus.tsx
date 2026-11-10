import React from 'react';
import './size-md-type-input-variant-focus.css';
import icon from './assets/size.svg';

export const SizeMdTypeInputVariantFocus: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-input-variant-focus">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=input, variant=focus" />
    </div>
  );
};
