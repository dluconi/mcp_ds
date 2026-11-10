import React from 'react';
import './state-hover.css';
import icon from './assets/state.svg';

export const StateHover: React.FC = () => {
  return (
    <div className="ds-component ds-state-hover">
      <img src={icon} className="h-full w-auto object-contain" alt="state=hover" />
    </div>
  );
};
