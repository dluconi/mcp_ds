import React from 'react';
import './icon-message-square-text.css';
import icon from './assets/icon.svg';

export const IconMessageSquareText: React.FC = () => {
  return (
    <div className="ds-component ds-icon-message-square-text">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=message-square-text" />
    </div>
  );
};
