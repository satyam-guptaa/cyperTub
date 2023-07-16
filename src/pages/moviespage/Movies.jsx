import React from 'react';
import './movies.scss';
import {
	MOVIES_HEADING,
	MOVIE_TYPE,
} from '../../utilities/constants/appconstants';
import Card from '../../components/regularCard/Card';
import { useSelector } from 'react-redux';

const Movies = () => {
	const { data } = useSelector((state) => state.appData);
	const moviesData = data.filter((item) => item.category === MOVIE_TYPE);

	return (
		<section className='movies'>
			<h1>{MOVIES_HEADING}</h1>
			<div className='cards-container'>
				{moviesData.map((movie) => {
					return <Card key={movie.title} cardData={movie} />;
				})}
			</div>
		</section>
	);
};

export default Movies;
