import React from 'react';
import './border-off-shadown-none.css';
import icon from './assets/border.svg';

export const BorderOffShadownNone: React.FC = () => {
  return (
    <div className="ds-component ds-border-off-shadown-none">
      <img src={icon} className="h-full w-auto object-contain" alt="border=off, shadown=none" />
    </div>
  );
};
