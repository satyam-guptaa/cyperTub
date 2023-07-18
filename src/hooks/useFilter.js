import { useState, useEffect } from 'react';

export const useFilter = (data) => {
	const [inputVal, setInputVal] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	const handleOnChange = (e) => {
		setInputVal(e.target.value);
	};

	useEffect(() => {
		if (inputVal.length > 0) {
			const filteredArray = data.filter((item) =>
				item.title.toLowerCase().includes(inputVal.toLowerCase())
			);
			setFilteredData(filteredArray);
		} else {
			setFilteredData(data);
		}
	}, [inputVal, data]);

	return [filteredData, handleOnChange, inputVal];
};
