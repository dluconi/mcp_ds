import React from 'react';
import './icon-message-square-more.css';
import icon from './assets/icon.svg';

export const IconMessageSquareMore: React.FC = () => {
  return (
    <div className="ds-component ds-icon-message-square-more">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=message-square-more" />
    </div>
  );
};
