import React from 'react';
import './side-other-type-content.css';
import icon from './assets/side.svg';

export const SideOtherTypeContent: React.FC = () => {
  return (
    <div className="ds-component ds-side-other-type-content">
      <img src={icon} className="h-full w-auto object-contain" alt="side=other, type=content" />
    </div>
  );
};
