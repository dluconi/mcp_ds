import React from 'react';
import './border-on-shadown-sm.css';
import icon from './assets/border.svg';

export const BorderOnShadownSm: React.FC = () => {
  return (
    <div className="ds-component ds-border-on-shadown-sm">
      <img src={icon} className="h-full w-auto object-contain" alt="border=on, shadown=sm" />
    </div>
  );
};
