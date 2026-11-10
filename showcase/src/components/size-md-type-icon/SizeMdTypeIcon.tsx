import React from 'react';
import './size-md-type-icon.css';
import icon from './assets/size.svg';

export const SizeMdTypeIcon: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-icon">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=icon" />
    </div>
  );
};
