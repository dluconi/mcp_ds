import React from 'react';
import './state-active.css';
import icon from './assets/state.svg';

export const StateActive: React.FC = () => {
  return (
    <div className="ds-component ds-state-active">
      <img src={icon} className="h-full w-auto object-contain" alt="state=active" />
    </div>
  );
};
