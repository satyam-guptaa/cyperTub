import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookmark } from '../../store/appDataSlice';
import './trendingCard.scss';
import {
	bookmarkSVG,
	bookmarkSVGFull,
} from '../../utilities/constants/bookmarkSVGs';
import { PLAY_LABEL } from '../../utilities/constants/appconstants';
import { ToastContainer, toast } from 'react-toastify';
import RenderDetails from '../cardhelper/renderDetails/RenderDetails';

const TrendingCard = ({ item }) => {
	const dispatch = useDispatch();
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleOnBookmark = () => {
		dispatch(
			bookmark({ title: item.title, bookmarked: !item.isBookmarked })
		);
	};

	const handlePlay = () => {
		toast('Work in progress!!', {
			type: 'info',
			position: 'top-right',
			toastId: 'WIP',
		});
	};

	return (
		<article className={`thumbnail ${imgLoaded ? 'thumbnail-loaded' : ''}`}>
			<img
				src={item.thumbnail.trending.large}
				className='thumbnail-img-trending'
				alt='trending img'
				loading='lazy'
				onLoad={() => setImgLoaded(true)}
			/>
			<button
				className='thumbnail-img-bookmark'
				onClick={handleOnBookmark}
			>
				{item.isBookmarked ? bookmarkSVGFull : bookmarkSVG}
			</button>
			<div className='thumbnail-details-container'>
				<RenderDetails
					year={item.year}
					category={item.category}
					rating={item.rating}
					fontSize='1.5rem'
				/>
				<h2>{item.title}</h2>
			</div>
			<div className='thumbnail-play-container'>
				<button className='play-button' onClick={handlePlay}>
					<img src='/assets/icon-play.svg' alt='play' />
					<span>{PLAY_LABEL}</span>
				</button>
			</div>
		</article>
	);
};

export default TrendingCard;
