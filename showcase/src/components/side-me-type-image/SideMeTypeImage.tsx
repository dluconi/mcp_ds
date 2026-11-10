import React from 'react';
import './side-me-type-image.css';
import icon from './assets/side.svg';

export const SideMeTypeImage: React.FC = () => {
  return (
    <div className="ds-component ds-side-me-type-image">
      <img src={icon} className="h-full w-auto object-contain" alt="side=me, type=image" />
    </div>
  );
};
