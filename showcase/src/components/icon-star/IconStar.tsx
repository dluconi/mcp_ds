import React from 'react';
import './icon-star.css';
import icon from './assets/icon.svg';

export const IconStar: React.FC = () => {
  return (
    <div className="ds-component ds-icon-star">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=star" />
    </div>
  );
};
