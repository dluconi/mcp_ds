import React from 'react';
import './size-md-type-input-variant-active.css';
import icon from './assets/size.svg';

export const SizeMdTypeInputVariantActive: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-input-variant-active">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=input, variant=active" />
    </div>
  );
};
