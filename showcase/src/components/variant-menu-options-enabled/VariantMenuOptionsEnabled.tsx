import React from 'react';
import './variant-menu-options-enabled.css';
import icon from './assets/variant.svg';

export const VariantMenuOptionsEnabled: React.FC = () => {
  return (
    <div className="ds-component ds-variant-menu-options-enabled">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=menu-options-enabled" />
    </div>
  );
};
