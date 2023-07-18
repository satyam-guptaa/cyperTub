import React, { useMemo } from 'react';
import './movies.scss';
import {
	MOVIES_HEADING,
	MOVIE_INPUT_PLACEHOLDER,
	MOVIE_TYPE,
} from '../../utilities/constants/appconstants';
import { useSelector } from 'react-redux';
import Search from '../../components/searchbar/Search';
import RenderCards from '../../components/card-helper/RenderCards.jsx';
import { useFilter } from '../../hooks/useFilter';

const Movies = () => {
	const { data } = useSelector((state) => state.appData);
	//so that movie data not keep changing on every render unless data changes
	const moviesData = useMemo(() => {
		return data.filter((item) => item.category === MOVIE_TYPE);
	}, [data]);
	const [filteredData, handleOnChange, inputVal] = useFilter(moviesData);

	return (
		<section className='section-container'>
			<Search
				placeholder={MOVIE_INPUT_PLACEHOLDER}
				value={inputVal}
				onChange={handleOnChange}
			/>
			<h1>{MOVIES_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards
					items={filteredData}
					noAppData={moviesData.length === 0}
				/>
			</div>
			{data.length > 0 && filteredData.length === 0 && inputVal && (
				<p>No Results</p>
			)}
		</section>
	);
};

export default Movies;
