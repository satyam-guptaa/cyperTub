import React from 'react';
import './trendingCard.scss';
import { TRENDING_TYPE_THUMBNAIL_LG } from '../../utilities/constants/appconstants';

const TrendingCard = ({ item, type }) => {
	const getThumbnailImg = () => {
		let thumbnail;
		switch (type) {
			case TRENDING_TYPE_THUMBNAIL_LG:
				thumbnail = item.thumbnail.trending.large;
			default:
				break;
		}
		return { thumbnail };
		s;
	};
	const thumbnailData = getThumbnailImg();
	const style = {
		backgroundImage: `url(${thumbnailData.thumbnail})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	};

	return <article className='thumbnail' style={style}></article>;
};

export default TrendingCard;
