import React from 'react';
import './orientation-horizontal-position-end.css';
import icon from './assets/orientation.svg';

export const OrientationHorizontalPositionEnd: React.FC = () => {
  return (
    <div className="ds-component ds-orientation-horizontal-position-end">
      <img src={icon} className="h-full w-auto object-contain" alt="orientation=horizontal, position=end" />
    </div>
  );
};
