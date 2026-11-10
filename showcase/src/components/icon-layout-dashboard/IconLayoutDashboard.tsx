import React from 'react';
import './icon-layout-dashboard.css';
import icon from './assets/icon.svg';

export const IconLayoutDashboard: React.FC = () => {
  return (
    <div className="ds-component ds-icon-layout-dashboard">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=layout-dashboard" />
    </div>
  );
};
