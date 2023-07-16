import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../../components/searchbar/Search';
import './bookmark.scss';
import {
	BOOKMARK_MOVIE_HEADING,
	BOOKMARK_TV_HEADING,
	MOVIE_TYPE,
	TV_TYPE,
} from '../../utilities/constants/appconstants';
import RenderCards from '../../components/card-helper/RenderCards';

const Bookmark = () => {
	const { data } = useSelector((state) => state.appData);
	const bookmarkMovieData = data.filter(
		(item) => item.isBookmarked && item.category === MOVIE_TYPE
	);
	const bookmarkTVData = data.filter(
		(item) => item.isBookmarked && item.category === TV_TYPE
	);

	return (
		<section className='section-container'>
			<Search />
			<h1>{BOOKMARK_MOVIE_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards items={bookmarkMovieData} />
			</div>
			<h1>{BOOKMARK_TV_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards items={bookmarkTVData} />
			</div>
		</section>
	);
};

export default Bookmark;
