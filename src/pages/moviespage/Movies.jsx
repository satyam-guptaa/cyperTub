import React from 'react';
import './movies.scss';
import {
	MOVIES_HEADING,
	MOVIE_TYPE,
} from '../../utilities/constants/appconstants';
import { useSelector } from 'react-redux';
import Search from '../../components/searchbar/Search';
import RenderCards from '../../components/card-helper/RenderCards.jsx';

const Movies = () => {
	const { data } = useSelector((state) => state.appData);
	const moviesData = data.filter((item) => item.category === MOVIE_TYPE);

	return (
		<section className='section-container'>
			<Search />
			<h1>{MOVIES_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards items={moviesData} />
			</div>
		</section>
	);
};

export default Movies;
