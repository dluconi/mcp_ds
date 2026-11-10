import React from 'react';
import './size-md-variant-secondary-state-default-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeMdVariantSecondaryStateDefaultTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-secondary-state-default-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=secondary, state=default, type=icon only" />
    </div>
  );
};
