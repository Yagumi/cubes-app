import React from 'react';

import './GameField.css';

function HideField({isHideField}) {
	const hideField = new Array(9).fill('').map(cube => (
		<li key={cube.id} className="GameField-box" style={{backgroundColor: 'beige'}}></li>
	))
	console.log(hideField)
	return(
		<div className="GameField">
			{hideField}
		</div>
	);
}



export default HideField;