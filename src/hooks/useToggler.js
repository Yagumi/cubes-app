import React, {useState} from 'react';

function useToggler(initialVal = false) {
	const [data, setData] = useState(initialVal);
	const toggler = () => {
		setData(!data);
	}

	const reset = () => {
		setData(false)
	}

	return [data, toggler, reset]
}

export default useToggler;