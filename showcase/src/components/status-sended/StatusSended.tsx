import React from 'react';
import './status-sended.css';
import icon from './assets/status.svg';

export const StatusSended: React.FC = () => {
  return (
    <div className="ds-component ds-status-sended">
      <img src={icon} className="h-full w-auto object-contain" alt="Status=sended" />
    </div>
  );
};
