import React from 'react';
import './size-md-variant-active.css';
import icon from './assets/size.svg';

export const SizeMdVariantActive: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-active">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=active" />
    </div>
  );
};
