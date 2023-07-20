import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookmark } from '../../store/appDataSlice';
import './card.scss';
import {
	bookmarkSVG,
	bookmarkSVGFull,
} from '../../utilities/constants/bookmarkSVGs';
import { PLAY_LABEL } from '../../utilities/constants/appconstants';
import { toast } from 'react-toastify';
import RenderDetails from '../cardhelper/renderDetails/RenderDetails';
import { useNavigate } from 'react-router-dom';

const Card = ({ cardData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [imgLoaded, setImgLoaded] = useState(false);

	const handlePlay = () => {
		navigate('/stream', { state: { ...cardData } });
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
					<button className='card-play-button' onClick={handlePlay}>
						<img src='/assets/icon-play.svg' alt='play' />
						<span>{PLAY_LABEL}</span>
					</button>
				</div>
			</div>
			<button className='card-img-bookmark' onClick={handleOnBookmark}>
				{cardData.isBookmarked ? bookmarkSVGFull : bookmarkSVG}
			</button>
			<RenderDetails
				year={cardData.year}
				category={cardData.category}
				rating={cardData.rating}
				fontSize='1.3rem'
			/>
			<h2 className='card-title'>{cardData.title}</h2>
		</article>
	);
};

export default Card;
