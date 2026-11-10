import React from 'react';
import './icon-x.css';
import icon from './assets/icon.svg';

export const IconX: React.FC = () => {
  return (
    <div className="ds-component ds-icon-x">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=x" />
    </div>
  );
};
