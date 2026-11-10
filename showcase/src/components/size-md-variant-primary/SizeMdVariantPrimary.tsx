import React from 'react';
import './size-md-variant-primary.css';
import icon from './assets/size.svg';

export const SizeMdVariantPrimary: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-primary">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=primary" />
    </div>
  );
};
