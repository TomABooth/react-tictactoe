import React, { useContext } from 'react';
import { GameContext } from '../../GameContext.js';

export default function Message() {
  const { message } = useContext(GameContext);
  return (
    <div className="message-container">
      <h2>{message}</h2>
    </div>
  );
}
