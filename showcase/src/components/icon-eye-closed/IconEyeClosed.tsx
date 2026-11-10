import React from 'react';
import './icon-eye-closed.css';
import icon from './assets/icon.svg';

export const IconEyeClosed: React.FC = () => {
  return (
    <div className="ds-component ds-icon-eye-closed">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=eye-closed" />
    </div>
  );
};
