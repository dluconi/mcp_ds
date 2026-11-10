import React from 'react';
import './size-md-type-input-select-variant-hover.css';
import icon from './assets/size.svg';

export const SizeMdTypeInputSelectVariantHover: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-input-select-variant-hover">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=input+select, variant=hover" />
    </div>
  );
};
