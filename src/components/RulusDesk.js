import React from 'react';

import './RulseDesk.css';

function RulesDesk({gameRules}) {
	return(
		<div className="RulesDesk">
			<span>attempts: {gameRules.attempts}</span>
			<span>Time remaining: {gameRules.time}</span>
		</div>
	);
}

export default RulesDesk;