import React from 'react';
import './icon-check-check.css';
import icon from './assets/icon.svg';

export const IconCheckCheck: React.FC = () => {
  return (
    <div className="ds-component ds-icon-check-check">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=check-check" />
    </div>
  );
};
