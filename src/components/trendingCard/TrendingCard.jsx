import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookmark } from '../../store/appDataSlice';
import './trendingCard.scss';

const TrendingCard = ({ item }) => {
	const dispatch = useDispatch();

	const handleOnBookmark = () => {
		dispatch(
			bookmark({ title: item.title, bookmarked: !item.isBookmarked })
		);
	};

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
		<article className='thumbnail'>
			<img
				src={item.thumbnail.trending.large}
				className='thumbnail-img-trending'
				alt='trending img'
			/>
			<button
				className='thumbnail-img-bookmark'
				onClick={handleOnBookmark}
			>
				{item.isBookmarked ? (
					<img src='/assets/icon-bookmark-full.svg' alt='bookmark' />
				) : (
					<img src='/assets/icon-bookmark-empty.svg' alt='bookmark' />
				)}
			</button>
			<div className='thumbnail-details-container'>
				<div className='thumbnail-details'>
					{renderDetails(item.year, item.category, item.rating)}
				</div>
				<h2>{item.title}</h2>
			</div>
		</article>
	);
};

export default TrendingCard;
