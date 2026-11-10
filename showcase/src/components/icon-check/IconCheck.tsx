import React from 'react';
import './icon-check.css';
import icon from './assets/icon.svg';

export const IconCheck: React.FC = () => {
  return (
    <div className="ds-component ds-icon-check">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=check" />
    </div>
  );
};
