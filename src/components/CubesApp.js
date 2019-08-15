import React, { useState } from 'react';
import uuid from 'uuid/v4';

import useToggle from '../hooks/useToggler';

import StartGameField from './StartGameField';
import EasyLevel from './EasyLevel';
import MiddleLevel from './MiddleLevel';
import HardLevel from './HardLevel';

import HideField from './HideField';

import './CubesApp.css';

function CubesApp({allColors, gameRules}) {
  const [isEasyNewGame, toggleIsEasyNewGame, resetEasy] = useToggle(false);
  const [isMiddleNewGame, toggleIsMiddleNewGame, resetMiddle] = useToggle(false);
  const [isHardNewGame, toggleIsHardNewGame, resetHard] = useToggle(false);

  const [isHideField, toggleisHideField, resetField] = useToggle(false);

  const startNewGame = () => {
    resetEasy()
    resetMiddle()
    resetHard()
    resetField()
  }

  const updateEasyLevel = (level) => {
    toggleIsEasyNewGame(level)
  }
  const updateMiddleLevel = (level) => {
    toggleIsMiddleNewGame(level)
  }
  const updateHardLevel = (level) => {
    toggleIsHardNewGame(level)
  }
  
  const updateGameField = (timer) => {
    toggleisHideField(timer)
  }

  if(isEasyNewGame) {
    return <EasyLevel 
      allColors={allColors} 
      gameRules={gameRules.easyLevel}
      updateGameField={updateGameField}
      isHideField={isHideField}
      startNewGame={startNewGame} 
    />
  }

  if(isMiddleNewGame) {
    return <MiddleLevel 
      allColors={allColors} 
      gameRules={gameRules.middleLevel}
      updateGameField={updateGameField}
      isHideField={isHideField}
      startNewGame={startNewGame} 
    />
  }

  if(isHardNewGame) {
    return <HardLevel 
      allColors={allColors} 
      gameRules={gameRules.hardLevel}
      updateGameField={updateGameField}
      isHideField={isHideField}
      startNewGame={startNewGame} 
    />
  }
  
  return(
    <div className="CubesApp">
      <StartGameField 
        updateEasyLevel={updateEasyLevel}
        updateMiddleLevel={updateMiddleLevel}
        updateHardLevel={updateHardLevel}
      />
    </div>
  )
}

CubesApp.defaultProps = {
  cubes: new Array(9).fill(''),
  allColors: [
    {color: "red",id: uuid()}, 
    {color: "green", id: uuid()}, 
    {color: "blue", id: uuid()}, 
    {color: "yellow", id: uuid()}, 
    {color: "purple", id: uuid()}, 
    {color: "grey", id: uuid()}, 
    {color: "pink", id: uuid()}, 
    {color: "orange", id: uuid()}, 
    {color: "black", id: uuid()}
  ],
  gameRules: {
    easyLevel: {
      attempts: 3,
      time: "Unlimited"
    },
    middleLevel: {
      attempts: 2,
      time: 20
    },
    hardLevel: {
      attempts: 1,
      time: 10
    }
  }
}

export default CubesApp;