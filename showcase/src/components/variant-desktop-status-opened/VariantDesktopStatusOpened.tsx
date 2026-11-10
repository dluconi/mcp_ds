import React from 'react';
import './variant-desktop-status-opened.css';
import icon from './assets/variant.svg';

export const VariantDesktopStatusOpened: React.FC = () => {
  return (
    <div className="ds-component ds-variant-desktop-status-opened">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=desktop, Status=opened" />
    </div>
  );
};
