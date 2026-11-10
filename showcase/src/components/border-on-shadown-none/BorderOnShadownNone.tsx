import React from 'react';
import './border-on-shadown-none.css';
import icon from './assets/border.svg';

export const BorderOnShadownNone: React.FC = () => {
  return (
    <div className="ds-component ds-border-on-shadown-none">
      <img src={icon} className="h-full w-auto object-contain" alt="border=on, shadown=none" />
    </div>
  );
};
