import React from 'react';
import './orientation-horizontal-position-mid.css';
import icon from './assets/orientation.svg';

export const OrientationHorizontalPositionMid: React.FC = () => {
  return (
    <div className="ds-component ds-orientation-horizontal-position-mid">
      <img src={icon} className="h-full w-auto object-contain" alt="orientation=horizontal, position=mid" />
    </div>
  );
};
