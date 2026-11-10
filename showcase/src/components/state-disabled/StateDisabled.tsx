import React from 'react';
import './state-disabled.css';
import icon from './assets/state.svg';

export const StateDisabled: React.FC = () => {
  return (
    <div className="ds-component ds-state-disabled">
      <img src={icon} className="h-full w-auto object-contain" alt="state=disabled" />
    </div>
  );
};
