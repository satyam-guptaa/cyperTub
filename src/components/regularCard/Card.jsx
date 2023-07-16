import React from 'react';
import './card.scss';

const Card = ({ cardData }) => {
	const renderDetails = (year, category, rating) => {
		//created a resuable funtion so that for each info it attaches the disc automatically avoiding repeatition
		return (
			<>
				<div className='detail'>{year}</div>
				<div className='detail detail-category'>
					{category === 'Movie' ? (
						<img src='/assets/icon-category-movie.svg' />
					) : (
						<img src='/assets/icon-category-tv.svg' />
					)}
					{category}
				</div>
				<div className='detail'>{rating}</div>
			</>
		);
	};

	return (
		<article className='card'>
			<div className='card-img'>
				<img src={cardData.thumbnail.regular.medium} alt='thumbnail' />
			</div>
			<div className='card-details'>
				{renderDetails(
					cardData.year,
					cardData.category,
					cardData.rating
				)}
			</div>
			<h2 className='card-title'>{cardData.title}</h2>
		</article>
	);
};

export default Card;
