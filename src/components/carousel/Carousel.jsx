import React, { useRef } from 'react';
import ThumbnailCard from '../thumbnailCard/ThumbnailCard';
import './carousel.scss';
import { TRENDING_TYPE_THUMBNAIL_LG } from '../../utilities/constants/appconstants';

const Carousel = ({ data }) => {
	const carouselBoxRef = useRef(null);

	const handleScroll = (direction) => {
		const carouselBox = carouselBoxRef.current;
		const carouselWidth = carouselBox.clientWidth;

		if (direction === 'left') {
			carouselBox.scrollLeft -= carouselWidth;
		}
		if (direction === 'right') {
			carouselBox.scrollLeft += carouselWidth;
		}
	};
	return (
		<div className='carousel-container'>
			<button
				className='carousel-container-arrow carousel-container-arrow-left'
				onClick={() => handleScroll('left')}
			>
				&lt;
			</button>
			<button
				className='carousel-container-arrow carousel-container-arrow-right'
				onClick={() => handleScroll('right')}
			>
				&gt;
			</button>
			<div className='thumbnails' ref={carouselBoxRef}>
				{data &&
					data.map((item) => (
						<ThumbnailCard
							key={item.title}
							item={item}
							type={TRENDING_TYPE_THUMBNAIL_LG}
						/>
					))}
			</div>
		</div>
	);
};

export default Carousel;
