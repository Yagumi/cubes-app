import React, { useState, useEffect } from 'react';

function Timer({updateGameField}) {
	const [currentCount, setCount] = useState(5);
    const timer = () => setCount(currentCount - 1);
		
    useEffect(() => {
	      if (currentCount <= 0) {
	      	
	        return updateGameField(true);
	      }
	      const id = setInterval(timer, 1000);
	      return () => clearInterval(id);
    },[currentCount]);

    return(
			<div>
				{currentCount}
			</div>
    ); 
}

export default Timer;