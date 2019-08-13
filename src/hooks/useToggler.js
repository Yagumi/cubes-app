import React, {useState} from 'react';

function useToggler(initialVal) {
	const [data, setData] = useState(initialVal);

	const toggler = () => {
		setData(!data);
	}

	return [data, toggler]
}

export default useToggler;