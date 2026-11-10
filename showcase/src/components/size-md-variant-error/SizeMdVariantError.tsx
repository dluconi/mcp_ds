import React from 'react';
import './size-md-variant-error.css';
import icon from './assets/size.svg';

export const SizeMdVariantError: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-error">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=error" />
    </div>
  );
};
