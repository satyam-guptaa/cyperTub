import React from 'react';
import './trendingCard.scss';

const TrendingCard = ({ item }) => {
	return (
		<article className='thumbnail'>
			<img src={item.thumbnail.trending.large} alt='trending img' />
		</article>
	);
};

export default TrendingCard;
