import React from 'react';
import './size-xs-variant-outline-state-focus-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeXsVariantOutlineStateFocusTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-xs-variant-outline-state-focus-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=xs, variant=outline, state=focus, type=icon only" />
    </div>
  );
};
