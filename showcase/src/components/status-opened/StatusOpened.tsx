import React from 'react';
import './status-opened.css';
import icon from './assets/status.svg';

export const StatusOpened: React.FC = () => {
  return (
    <div className="ds-component ds-status-opened">
      <img src={icon} className="h-full w-auto object-contain" alt="status=opened" />
    </div>
  );
};
