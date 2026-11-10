import React from 'react';
import './orientation-horizontal-position-start.css';
import icon from './assets/orientation.svg';

export const OrientationHorizontalPositionStart: React.FC = () => {
  return (
    <div className="ds-component ds-orientation-horizontal-position-start">
      <img src={icon} className="h-full w-auto object-contain" alt="orientation=horizontal, position=start" />
    </div>
  );
};
