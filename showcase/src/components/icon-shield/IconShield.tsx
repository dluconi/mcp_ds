import React from 'react';
import './icon-shield.css';
import icon from './assets/icon.svg';

export const IconShield: React.FC = () => {
  return (
    <div className="ds-component ds-icon-shield">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=shield" />
    </div>
  );
};
