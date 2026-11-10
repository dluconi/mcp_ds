import React from 'react';
import './border-on-shadown-lg.css';
import icon from './assets/border.svg';

export const BorderOnShadownLg: React.FC = () => {
  return (
    <div className="ds-component ds-border-on-shadown-lg">
      <img src={icon} className="h-full w-auto object-contain" alt="border=on, shadown=lg" />
    </div>
  );
};
