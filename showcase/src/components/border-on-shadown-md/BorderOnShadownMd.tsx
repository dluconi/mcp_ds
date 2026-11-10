import React from 'react';
import './border-on-shadown-md.css';
import icon from './assets/border.svg';

export const BorderOnShadownMd: React.FC = () => {
  return (
    <div className="ds-component ds-border-on-shadown-md">
      <img src={icon} className="h-full w-auto object-contain" alt="border=on, shadown=md" />
    </div>
  );
};
