import React from 'react';
import './icon-panel-left-open.css';
import icon from './assets/icon.svg';

export const IconPanelLeftOpen: React.FC = () => {
  return (
    <div className="ds-component ds-icon-panel-left-open">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=panel-left-open" />
    </div>
  );
};
