import React from 'react';
import './size-md-variant-secondary.css';
import icon from './assets/size.svg';

export const SizeMdVariantSecondary: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-secondary">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=secondary" />
    </div>
  );
};
