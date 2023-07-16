import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookmark } from '../../store/appDataSlice';
import './card.scss';
import {
	bookmarkSVG,
	bookmarkSVGFull,
} from '../../utilities/constants/bookmarkSVGs';

const Card = ({ cardData }) => {
	const dispatch = useDispatch();

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

	const handleOnBookmark = () => {
		dispatch(
			bookmark({
				title: cardData.title,
				bookmarked: !cardData.isBookmarked,
			})
		);
	};

	return (
		<article className='card'>
			<div className='card-img'>
				<img
					src={cardData.thumbnail.regular.medium}
					alt='thumbnail'
					loading='lazy'
				/>
			</div>
			<button className='card-img-bookmark' onClick={handleOnBookmark}>
				{cardData.isBookmarked ? bookmarkSVGFull : bookmarkSVG}
			</button>
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
