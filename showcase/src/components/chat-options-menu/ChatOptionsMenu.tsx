import React from 'react';
import './chat-options-menu.css';
import icon from './assets/chat.svg';

export const ChatOptionsMenu: React.FC = () => {
  return (
    <div className="ds-component ds-chat-options-menu">
      <img src={icon} className="h-full w-auto object-contain" alt="chat-options-menu" />
    </div>
  );
};
