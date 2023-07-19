import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookmark } from '../../store/appDataSlice';
import './card.scss';
import {
	bookmarkSVG,
	bookmarkSVGFull,
} from '../../utilities/constants/bookmarkSVGs';
import { PLAY_LABEL } from '../../utilities/constants/appconstants';

const Card = ({ cardData }) => {
	const dispatch = useDispatch();
	const [imgLoaded, setImgLoaded] = useState(false);
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
			<div className={`card-img ${imgLoaded ? 'card-img-loaded' : ''}`}>
				<img
					src={cardData.thumbnail.regular.large}
					alt='thumbnail'
					className='thumbnail-image'
					onLoad={() => {
						setImgLoaded(true);
					}}
					loading='lazy'
				/>
				<div className='card-play-container'>
					<button className='card-play-button'>
						<img src='/assets/icon-play.svg' alt='play' />
						<span>{PLAY_LABEL}</span>
					</button>
				</div>
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
