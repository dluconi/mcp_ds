import React from 'react';
import './size-md-variant-ghost-state-focus-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeMdVariantGhostStateFocusTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-ghost-state-focus-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=ghost, state=focus, type=icon only" />
    </div>
  );
};
