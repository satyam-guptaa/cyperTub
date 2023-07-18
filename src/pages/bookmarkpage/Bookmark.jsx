import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Search from '../../components/searchbar/Search';
import './bookmark.scss';
import {
	BOOKMARK_INPUT_PLACEHOLDER,
	BOOKMARK_MOVIE_HEADING,
	BOOKMARK_TV_HEADING,
	MOVIE_TYPE,
	TV_TYPE,
} from '../../utilities/constants/appconstants';
import RenderCards from '../../components/card-helper/RenderCards';
import { useFilter } from '../../hooks/useFilter';

const Bookmark = () => {
	const { data } = useSelector((state) => state.appData);
	const [filteredData, handleOnChange, inputVal] = useFilter(data);
	const bookmarkMovieData = useMemo(() => {
		return filteredData.filter((item) => item.category === MOVIE_TYPE);
	}, [filteredData]);
	const bookmarkTVData = useMemo(() => {
		return filteredData.filter((item) => item.category === TV_TYPE);
	}, [filteredData]);
	//Refactoring needed here
	return (
		<section className='section-container'>
			<Search
				placeholder={BOOKMARK_INPUT_PLACEHOLDER}
				value={inputVal}
				onChange={handleOnChange}
			/>
			<h1>{BOOKMARK_MOVIE_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards
					items={bookmarkMovieData}
					noAppData={data.length === 0}
				/>
				{data.length > 0 &&
					bookmarkMovieData.length === 0 &&
					inputVal && <p>No Results</p>}
			</div>
			<h1>{BOOKMARK_TV_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards
					items={bookmarkTVData}
					noAppData={data.length === 0}
				/>
				{data.length > 0 && bookmarkTVData.length === 0 && inputVal && (
					<p>No Results</p>
				)}
			</div>
		</section>
	);
};

export default Bookmark;
