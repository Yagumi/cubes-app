import React from 'react';
import uuid from 'uuid/v4';

import { mixingColors } from './helper';

import './GameField.css';

function GameField({allColors}) {
	const randomColorsField = allColors.slice().sort(mixingColors);
	const field = randomColorsField.map(cube => (
		<li key={cube.id} className="GameField-box" style={{backgroundColor: cube.color}}></li>
	))

	return(
		<div className="GameField">
			{field}
		</div>
	);
}

GameField.defaultProps = {
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
  ]
}

export default GameField;