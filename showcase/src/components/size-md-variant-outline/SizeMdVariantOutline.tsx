import React from 'react';
import './size-md-variant-outline.css';
import icon from './assets/size.svg';

export const SizeMdVariantOutline: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-outline">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=outline" />
    </div>
  );
};
