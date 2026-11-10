import React from 'react';
import './icon-shield-alert.css';
import icon from './assets/icon.svg';

export const IconShieldAlert: React.FC = () => {
  return (
    <div className="ds-component ds-icon-shield-alert">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=shield-alert" />
    </div>
  );
};
