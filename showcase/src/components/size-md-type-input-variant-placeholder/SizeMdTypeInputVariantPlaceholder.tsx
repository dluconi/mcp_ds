import React from 'react';
import './size-md-type-input-variant-placeholder.css';
import icon from './assets/size.svg';

export const SizeMdTypeInputVariantPlaceholder: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-input-variant-placeholder">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=input, variant=placeholder" />
    </div>
  );
};
