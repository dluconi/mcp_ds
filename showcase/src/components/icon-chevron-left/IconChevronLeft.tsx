import React from 'react';
import './icon-chevron-left.css';
import icon from './assets/icon.svg';

export const IconChevronLeft: React.FC = () => {
  return (
    <div className="ds-component ds-icon-chevron-left">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=chevron-left" />
    </div>
  );
};
