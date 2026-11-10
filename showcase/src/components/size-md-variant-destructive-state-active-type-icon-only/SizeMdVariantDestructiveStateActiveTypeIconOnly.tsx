import React from 'react';
import './size-md-variant-destructive-state-active-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeMdVariantDestructiveStateActiveTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-destructive-state-active-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=destructive, state=active, type=icon only" />
    </div>
  );
};
