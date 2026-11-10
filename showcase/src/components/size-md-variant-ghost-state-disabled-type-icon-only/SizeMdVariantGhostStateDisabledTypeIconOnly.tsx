import React from 'react';
import './size-md-variant-ghost-state-disabled-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeMdVariantGhostStateDisabledTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-ghost-state-disabled-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=ghost, state=disabled, type=icon only" />
    </div>
  );
};
