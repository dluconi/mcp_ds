import React from 'react';
import './icon-search.css';
import icon from './assets/icon.svg';

export const IconSearch: React.FC = () => {
  return (
    <div className="ds-component ds-icon-search">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=search" />
    </div>
  );
};
