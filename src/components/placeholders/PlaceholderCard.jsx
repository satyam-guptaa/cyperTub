import React from 'react';
import './placeholderCard.scss';

const PlaceholderCard = ({ type }) => {
	const styleLarge = { width: '47rem', height: '23rem' };
	const styleSmall = { width: '28rem', height: '17.4rem' };
	return (
		<div
			className='placeholder-container'
			style={type === 'large' ? styleLarge : styleSmall}
		></div>
	);
};

export default PlaceholderCard;
