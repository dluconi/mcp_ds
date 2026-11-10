import React from 'react';
import './variant-desktop-size-1280.css';
import icon from './assets/variant.svg';

export const VariantDesktopSize1280: React.FC = () => {
  return (
    <div className="ds-component ds-variant-desktop-size-1280">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=desktop, size=1280" />
    </div>
  );
};
