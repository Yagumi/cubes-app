import React, { useState } from 'react';


import './StartGameField.css';

function StartGameField({updateEasyLevel, updateMiddleLevel, updateHardLevel}) {
  return(
   	<div className="StartGameField">
   		<h1>Choose Your Game Level</h1>
   		<div>
   			<button className="low" onClick={updateEasyLevel}>Start Easy Game</button>
   			<button className="low" onClick={updateMiddleLevel}>Start Middle Game</button>
   			<button className="low" onClick={updateHardLevel}>Start Hard Game</button>
   		</div>
   	</div>
  );
}

export default StartGameField;