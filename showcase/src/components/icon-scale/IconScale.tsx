import React from 'react';
import './icon-scale.css';
import icon from './assets/icon.svg';

export const IconScale: React.FC = () => {
  return (
    <div className="ds-component ds-icon-scale">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=scale" />
    </div>
  );
};
