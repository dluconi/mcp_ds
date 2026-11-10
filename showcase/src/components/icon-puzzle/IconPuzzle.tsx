import React from 'react';
import './icon-puzzle.css';
import icon from './assets/icon.svg';

export const IconPuzzle: React.FC = () => {
  return (
    <div className="ds-component ds-icon-puzzle">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=puzzle" />
    </div>
  );
};
