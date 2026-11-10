import React from 'react';
import './mode-light.css';
import icon from './assets/mode.svg';

export const ModeLight: React.FC = () => {
  return (
    <div className="ds-component ds-mode-light">
      <img src={icon} className="h-full w-auto object-contain" alt="mode=light" />
    </div>
  );
};
