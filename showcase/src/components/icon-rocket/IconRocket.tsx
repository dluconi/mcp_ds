import React from 'react';
import './icon-rocket.css';
import icon from './assets/icon.svg';

export const IconRocket: React.FC = () => {
  return (
    <div className="ds-component ds-icon-rocket">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=rocket" />
    </div>
  );
};
