import React from 'react';

import { mixingColors } from './helper';

import './GameField.css';

function GameField({allColors, isHideField}) {
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



export default GameField;