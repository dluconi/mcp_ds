import React from 'react';
import './variant-desktop-status-closed.css';
import icon from './assets/variant.svg';

export const VariantDesktopStatusClosed: React.FC = () => {
  return (
    <div className="ds-component ds-variant-desktop-status-closed">
      <img src={icon} className="h-full w-auto object-contain" alt="variant=desktop, Status=closed" />
    </div>
  );
};
