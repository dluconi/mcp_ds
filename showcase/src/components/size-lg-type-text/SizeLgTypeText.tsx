import React from 'react';
import './size-lg-type-text.css';
import icon from './assets/size.svg';

export const SizeLgTypeText: React.FC = () => {
  return (
    <div className="ds-component ds-size-lg-type-text">
      <img src={icon} className="h-full w-auto object-contain" alt="size=lg, type=text" />
    </div>
  );
};
