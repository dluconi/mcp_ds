import React from 'react';
import './icon-calendar-clock.css';
import icon from './assets/icon.svg';

export const IconCalendarClock: React.FC = () => {
  return (
    <div className="ds-component ds-icon-calendar-clock">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=calendar-clock" />
    </div>
  );
};
