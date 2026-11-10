import React from 'react';
import './status-readed.css';
import icon from './assets/status.svg';

export const StatusReaded: React.FC = () => {
  return (
    <div className="ds-component ds-status-readed">
      <img src={icon} className="h-full w-auto object-contain" alt="Status=readed" />
    </div>
  );
};
