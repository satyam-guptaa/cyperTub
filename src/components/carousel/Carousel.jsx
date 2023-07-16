import React, { useRef } from 'react';
import TrendingCard from '../trendingCard/TrendingCard';
import './carousel.scss';
import {
	LEFT_DIRECTION,
	RIGHT_DIRECTION,
} from '../../utilities/constants/appconstants';

const Carousel = ({ data }) => {
	const carouselBoxRef = useRef(null);

	const handleScroll = (direction) => {
		const carouselBox = carouselBoxRef.current;
		const carouselWidth = carouselBox.clientWidth;

		if (direction === LEFT_DIRECTION) {
			carouselBox.scrollLeft -= carouselWidth;
		}
		if (direction === RIGHT_DIRECTION) {
			carouselBox.scrollLeft += carouselWidth;
		}
	};
	return (
		<div className='carousel-container'>
			<button
				className='carousel-container-arrow carousel-container-arrow-left'
				onClick={() => handleScroll(LEFT_DIRECTION)}
			>
				&lt;
			</button>
			<button
				className='carousel-container-arrow carousel-container-arrow-right'
				onClick={() => handleScroll(RIGHT_DIRECTION)}
			>
				&gt;
			</button>
			<div className='thumbnails' ref={carouselBoxRef}>
				{data &&
					data.map((item) => (
						<TrendingCard key={item.title} item={item} />
					))}
			</div>
		</div>
	);
};

export default Carousel;
