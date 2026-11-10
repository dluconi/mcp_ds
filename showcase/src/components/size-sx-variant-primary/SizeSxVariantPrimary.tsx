import React from 'react';
import './size-sx-variant-primary.css';
import icon from './assets/size.svg';

export const SizeSxVariantPrimary: React.FC = () => {
  return (
    <div className="ds-component ds-size-sx-variant-primary">
      <img src={icon} className="h-full w-auto object-contain" alt="size=sx, variant=primary" />
    </div>
  );
};
