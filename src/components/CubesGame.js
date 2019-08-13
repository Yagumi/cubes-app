import React, { useState } from 'react';
import StartGameField from './StartGameField';
import GameField from './GameField';

import useToggler from '../hooks/useToggler';
import './CubesGame.css';

function CubesGame() {
  const [isNewGame, toggleIsNewGame] = useToggler(true);
  if(isNewGame) {
    return(
      <div className="CubesGame">
        <StartGameField />
        <button onClick={toggleIsNewGame}>Start New Game</button>
      </div>
    )
  }
  return (
    <div>
      <div className="CubesGame">
        <GameField />
        <button onClick={toggleIsNewGame}>Start New Game</button>
      </div>
    </div>
  )
}

export default CubesGame;