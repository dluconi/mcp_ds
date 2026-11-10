import React from 'react';
import './size-xs-variant-secondary-state-hover-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeXsVariantSecondaryStateHoverTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-xs-variant-secondary-state-hover-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=xs, variant=secondary, state=hover, type=icon only" />
    </div>
  );
};
