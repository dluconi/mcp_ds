import React from 'react';
import './status-closed.css';
import icon from './assets/status.svg';

export const StatusClosed: React.FC = () => {
  return (
    <div className="ds-component ds-status-closed">
      <img src={icon} className="h-full w-auto object-contain" alt="status=closed" />
    </div>
  );
};
