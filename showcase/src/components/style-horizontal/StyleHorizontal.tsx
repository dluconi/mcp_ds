import React from 'react';
import './style-horizontal.css';
import icon from './assets/style.svg';

export const StyleHorizontal: React.FC = () => {
  return (
    <div className="ds-component ds-style-horizontal">
      <img src={icon} className="h-full w-auto object-contain" alt="style=horizontal" />
    </div>
  );
};
