import React from 'react';
import './icon-scroll-text.css';
import icon from './assets/icon.svg';

export const IconScrollText: React.FC = () => {
  return (
    <div className="ds-component ds-icon-scroll-text">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=scroll-text" />
    </div>
  );
};
