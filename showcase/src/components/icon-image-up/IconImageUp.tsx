import React from 'react';
import './icon-image-up.css';
import icon from './assets/icon.svg';

export const IconImageUp: React.FC = () => {
  return (
    <div className="ds-component ds-icon-image-up">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=image-up" />
    </div>
  );
};
