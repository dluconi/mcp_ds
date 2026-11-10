import React from 'react';
import './lucide-icons-circle-x.css';
import icon from './assets/lucide.svg';

export const LucideIconsCircleX: React.FC = () => {
  return (
    <div className="ds-component ds-lucide-icons-circle-x">
      <img src={icon} className="h-full w-auto object-contain" alt="Lucide Icons / circle-x" />
    </div>
  );
};
