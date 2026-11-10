import React from 'react';
import './side-me-type-content.css';
import icon from './assets/side.svg';

export const SideMeTypeContent: React.FC = () => {
  return (
    <div className="ds-component ds-side-me-type-content">
      <img src={icon} className="h-full w-auto object-contain" alt="side=me, type=content" />
    </div>
  );
};
