import React from 'react';

import GameField from './GameField';
import RulesDesk from './RulusDesk';
import Timer from './Timer';
import HideField from './HideField';

function EasyLevel({allColors, gameRules, updateGameField, isHideField, startNewGame}) {
	if(isHideField) {
		return <div className="CubesApp">
      <HideField />
      <RulesDesk gameRules={gameRules} />
      <button 
        className="CubesApp-startButton" 
        onClick={startNewGame}>
          Start New Game
      </button>
    </div>
	}
	return (
    <div className="CubesApp">
      <GameField allColors={allColors} />
      <RulesDesk gameRules={gameRules} />
      <Timer updateGameField={updateGameField} />
      <button 
        className="CubesApp-startButton" 
        onClick={startNewGame}>
          Start New Game
      </button>
    </div>
  );
}

export default EasyLevel;