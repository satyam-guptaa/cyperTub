import React from 'react';
import { MOVIE_TYPE } from '../../../utilities/constants/appconstants';
import './renderDetails.scss';

const RenderDetails = ({ year, category, rating, fontSize }) => {
	return (
		<div className='details' style={{ fontSize: fontSize }}>
			<div className='detail'>{year}</div>
			<div className='detail detail-category'>
				{category === MOVIE_TYPE ? (
					<img src='/assets/icon-category-movie.svg' />
				) : (
					<img src='/assets/icon-category-tv.svg' />
				)}
				{category}
			</div>
			<div className='detail'>{rating}</div>
		</div>
	);
};

export default RenderDetails;
