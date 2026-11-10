import React from 'react';
import './size-md-type-input-variant-error.css';
import icon from './assets/size.svg';

export const SizeMdTypeInputVariantError: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-input-variant-error">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=input, variant=error" />
    </div>
  );
};
