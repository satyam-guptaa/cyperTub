import React, { useMemo } from 'react';
import {
	MOVIES_HEADING,
	MOVIE_INPUT_PLACEHOLDER,
	MOVIE_TYPE,
} from '../../utilities/constants/appconstants';
import RenderCardsNew from '../../components/cardhelper';
import Search from '../../components/searchbar/Search';
import { useSelector } from 'react-redux';
import { useFilter } from '../../hooks/useFilter';

const Movies = () => {
	const { data } = useSelector((state) => state.appData);
	//so that data not keep changing on every render unless storedata changes
	const categoryData = useMemo(() => {
		return data.filter((item) => item.category === MOVIE_TYPE);
	}, [data]);
	const [filteredData, handleOnChange, inputVal] = useFilter(categoryData);

	return (
		<div className='section-container'>
			<Search
				placeholder={MOVIE_INPUT_PLACEHOLDER}
				value={inputVal}
				onChange={handleOnChange}
			/>
			<RenderCardsNew
				filteredData={filteredData}
				heading={MOVIES_HEADING}
				appData={data}
				inputVal={inputVal}
			/>
		</div>
	);
};

export default Movies;
