import React from 'react';
import './icon-hand-coins.css';
import icon from './assets/icon.svg';

export const IconHandCoins: React.FC = () => {
  return (
    <div className="ds-component ds-icon-hand-coins">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=hand-coins" />
    </div>
  );
};
