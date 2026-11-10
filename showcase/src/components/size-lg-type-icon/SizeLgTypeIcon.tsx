import React from 'react';
import './size-lg-type-icon.css';
import icon from './assets/size.svg';

export const SizeLgTypeIcon: React.FC = () => {
  return (
    <div className="ds-component ds-size-lg-type-icon">
      <img src={icon} className="h-full w-auto object-contain" alt="size=lg, type=icon" />
    </div>
  );
};
