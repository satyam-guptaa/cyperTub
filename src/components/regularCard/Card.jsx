import React from 'react';
import './card.scss';

const Card = ({ cardData }) => {
	const style = {
		backgroundImage: `url(${cardData.thumbnail.regular.medium})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	};
	console.log(cardData);
	return (
		<div className='card'>
			<div className='card-img' style={style}></div>
		</div>
	);
};

export default Card;
