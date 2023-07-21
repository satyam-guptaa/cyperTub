import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Search from '../../components/searchbar/Search';
import {
	BOOKMARK_INPUT_PLACEHOLDER,
	BOOKMARK_MOVIE_HEADING,
	BOOKMARK_TV_HEADING,
	MOVIE_TYPE,
	TV_TYPE,
} from '../../utilities/constants/appconstants';
import { useFilter } from '../../hooks/useFilter';
import RenderCardsNew from '../../components/cardhelper';

const Bookmark = () => {
	const { data } = useSelector((state) => state.appData);
	const [filteredData, handleOnChange, inputVal] = useFilter(data);
	const bookmarkMovieData = useMemo(() => {
		return filteredData.filter(
			(item) => item.category === MOVIE_TYPE && item.isBookmarked
		);
	}, [filteredData]);
	const bookmarkTVData = useMemo(() => {
		return filteredData.filter(
			(item) => item.category === TV_TYPE && item.isBookmarked
		);
	}, [filteredData]);

	return (
		<section className='section-container'>
			<Search
				placeholder={BOOKMARK_INPUT_PLACEHOLDER}
				value={inputVal}
				onChange={handleOnChange}
			/>
			<RenderCardsNew
				filteredData={bookmarkMovieData}
				heading={BOOKMARK_MOVIE_HEADING}
				appData={data}
				inputVal={inputVal}
			/>
			<RenderCardsNew
				filteredData={bookmarkTVData}
				heading={BOOKMARK_TV_HEADING}
				appData={data}
				inputVal={inputVal}
			/>
		</section>
	);
};

export default Bookmark;
