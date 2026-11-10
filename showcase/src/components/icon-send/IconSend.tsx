import React from 'react';
import './icon-send.css';
import icon from './assets/icon.svg';

export const IconSend: React.FC = () => {
  return (
    <div className="ds-component ds-icon-send">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=send" />
    </div>
  );
};
