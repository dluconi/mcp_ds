import React from 'react';
import './icon-bell.css';
import icon from './assets/icon.svg';

export const IconBell: React.FC = () => {
  return (
    <div className="ds-component ds-icon-bell">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=bell" />
    </div>
  );
};
