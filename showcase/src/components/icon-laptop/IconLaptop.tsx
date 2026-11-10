import React from 'react';
import './icon-laptop.css';
import icon from './assets/icon.svg';

export const IconLaptop: React.FC = () => {
  return (
    <div className="ds-component ds-icon-laptop">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=laptop" />
    </div>
  );
};
