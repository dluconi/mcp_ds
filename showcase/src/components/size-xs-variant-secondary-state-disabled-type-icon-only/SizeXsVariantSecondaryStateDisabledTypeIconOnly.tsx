import React from 'react';
import './size-xs-variant-secondary-state-disabled-type-icon-only.css';
import icon from './assets/size.svg';

export const SizeXsVariantSecondaryStateDisabledTypeIconOnly: React.FC = () => {
  return (
    <div className="ds-component ds-size-xs-variant-secondary-state-disabled-type-icon-only">
      <img src={icon} className="h-full w-auto object-contain" alt="size=xs, variant=secondary, state=disabled, type=icon only" />
    </div>
  );
};
