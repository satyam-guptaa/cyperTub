import React, { useMemo } from 'react';
import {
	TV_HEADING,
	TV_INPUT_PLACEHOLDER,
	TV_TYPE,
} from '../../utilities/constants/appconstants';
import RenderCardsNew from '../../components/cardhelper';
import { useSelector } from 'react-redux';
import { useFilter } from '../../hooks/useFilter';
import Search from '../../components/searchbar/Search';

const TV = () => {
	const { data } = useSelector((state) => state.appData);
	//so that data not keep changing on every render unless storedata changes
	const categoryData = useMemo(() => {
		return data.filter((item) => item.category === TV_TYPE);
	}, [data]);
	const [filteredData, handleOnChange, inputVal] = useFilter(categoryData);

	return (
		<div className='section-container'>
			<Search
				placeholder={TV_INPUT_PLACEHOLDER}
				value={inputVal}
				onChange={handleOnChange}
			/>
			<RenderCardsNew
				filteredData={filteredData}
				heading={TV_HEADING}
				appData={data}
				inputVal={inputVal}
			/>
		</div>
	);
};

export default TV;
