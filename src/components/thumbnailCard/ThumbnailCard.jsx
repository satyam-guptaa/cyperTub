import React from 'react';
import './thumbnailCard.scss';
import { TRENDING_TYPE_THUMBNAIL_LG } from '../../utilities/constants/appconstants';

const ThumbnailCard = ({ item, type }) => {
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

	return <div className='thumbnail' style={style}></div>;
};

export default ThumbnailCard;
