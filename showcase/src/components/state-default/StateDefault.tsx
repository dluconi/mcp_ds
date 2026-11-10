import React from 'react';
import './state-default.css';
import icon from './assets/state.svg';

export const StateDefault: React.FC = () => {
  return (
    <div className="ds-component ds-state-default">
      <img src={icon} className="h-full w-auto object-contain" alt="state=default" />
    </div>
  );
};
