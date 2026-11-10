import React from 'react';
import './size-md-variant-focus.css';
import icon from './assets/size.svg';

export const SizeMdVariantFocus: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-focus">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=focus" />
    </div>
  );
};
