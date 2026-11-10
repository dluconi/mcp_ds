import React from 'react';
import './state-focus.css';
import icon from './assets/state.svg';

export const StateFocus: React.FC = () => {
  return (
    <div className="ds-component ds-state-focus">
      <img src={icon} className="h-full w-auto object-contain" alt="state=focus" />
    </div>
  );
};
