import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/regularCard/Card';
import Search from '../../components/searchbar/Search';
import './bookmark.scss';
import {
	BOOKMARK_MOVIE_HEADING,
	BOOKMARK_TV_HEADING,
	MOVIE_TYPE,
	TV_TYPE,
} from '../../utilities/constants/appconstants';

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
				{bookmarkMovieData.map((movie) => {
					return <Card key={movie.title} cardData={movie} />;
				})}
			</div>
			<h1>{BOOKMARK_TV_HEADING}</h1>
			<div className='cards-container'>
				{bookmarkTVData.map((tv) => {
					return <Card key={tv.title} cardData={tv} />;
				})}
			</div>
		</section>
	);
};

export default Bookmark;
