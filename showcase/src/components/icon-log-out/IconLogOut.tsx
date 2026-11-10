import React from 'react';
import './icon-log-out.css';
import icon from './assets/icon.svg';

export const IconLogOut: React.FC = () => {
  return (
    <div className="ds-component ds-icon-log-out">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=log-out" />
    </div>
  );
};
