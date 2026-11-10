import React from 'react';
import './icon-share-2.css';
import icon from './assets/icon.svg';

export const IconShare2: React.FC = () => {
  return (
    <div className="ds-component ds-icon-share-2">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=share-2" />
    </div>
  );
};
