import React from 'react';
import './size-md-variant-primary-state-hover-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeMdVariantPrimaryStateHoverTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-primary-state-hover-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=primary, state=hover, type=icon only" />
    </div>
  );
};
