import React from 'react';
import './status-error.css';
import icon from './assets/status.svg';

export const StatusError: React.FC = () => {
  return (
    <div className="ds-component ds-status-error">
      <img src={icon} className="h-full w-auto object-contain" alt="Status=error" />
    </div>
  );
};
