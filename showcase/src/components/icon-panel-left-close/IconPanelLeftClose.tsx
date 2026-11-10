import React from 'react';
import './icon-panel-left-close.css';
import icon from './assets/icon.svg';

export const IconPanelLeftClose: React.FC = () => {
  return (
    <div className="ds-component ds-icon-panel-left-close">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=panel-left-close" />
    </div>
  );
};
