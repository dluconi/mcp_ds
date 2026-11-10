import React from 'react';
import './size-xs-variant-ghost-state-active-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeXsVariantGhostStateActiveTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-xs-variant-ghost-state-active-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=xs, variant=ghost, state=active, type=icon only" />
    </div>
  );
};
