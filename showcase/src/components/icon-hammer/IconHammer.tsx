import React from 'react';
import './icon-hammer.css';
import icon from './assets/icon.svg';

export const IconHammer: React.FC = () => {
  return (
    <div className="ds-component ds-icon-hammer">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=hammer" />
    </div>
  );
};
