import React from 'react';
import './icon-chevron-right.css';
import icon from './assets/icon.svg';

export const IconChevronRight: React.FC = () => {
  return (
    <div className="ds-component ds-icon-chevron-right">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=chevron-right" />
    </div>
  );
};
