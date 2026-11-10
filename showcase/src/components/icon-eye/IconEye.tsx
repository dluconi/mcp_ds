import React from 'react';
import './icon-eye.css';
import icon from './assets/icon.svg';

export const IconEye: React.FC = () => {
  return (
    <div className="ds-component ds-icon-eye">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=eye" />
    </div>
  );
};
