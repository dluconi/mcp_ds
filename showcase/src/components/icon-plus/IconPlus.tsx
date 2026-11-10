import React from 'react';
import './icon-plus.css';
import icon from './assets/icon.svg';

export const IconPlus: React.FC = () => {
  return (
    <div className="ds-component ds-icon-plus">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=plus" />
    </div>
  );
};
