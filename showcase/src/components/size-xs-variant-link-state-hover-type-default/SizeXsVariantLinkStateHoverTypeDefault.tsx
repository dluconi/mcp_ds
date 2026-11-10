import React from 'react';
import './size-xs-variant-link-state-hover-type-default.css';
import icon from './assets/size.svg';

export const SizeXsVariantLinkStateHoverTypeDefault: React.FC = () => {
  return (
    <div className="ds-component ds-size-xs-variant-link-state-hover-type-default">
      <img src={icon} className="h-full w-auto object-contain" alt="size=xs, variant=link, state=hover, type=default" />
    </div>
  );
};
