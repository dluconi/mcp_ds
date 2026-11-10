import React from 'react';
import './size-md-type-text.css';
import icon from './assets/size.svg';

export const SizeMdTypeText: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-text">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=text" />
    </div>
  );
};
