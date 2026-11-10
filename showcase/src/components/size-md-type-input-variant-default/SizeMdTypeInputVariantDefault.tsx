import React from 'react';
import './size-md-type-input-variant-default.css';
import icon from './assets/size.svg';

export const SizeMdTypeInputVariantDefault: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-input-variant-default">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=input, variant=default" />
    </div>
  );
};
