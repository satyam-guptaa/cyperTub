import React from 'react';
import { useSelector } from 'react-redux';
import { TV_HEADING } from '../../utilities/constants/appconstants';
import Card from '../../components/regularCard/Card';

const TV = () => {
	const { data } = useSelector((state) => state.appData);
	const tvData = data.filter((item) => item.category === 'TV Series');

	return (
		<section className='movies'>
			<h1>{TV_HEADING}</h1>
			<div className='cards-container'>
				{tvData.map((tv) => {
					return <Card cardData={tv} />;
				})}
			</div>
		</section>
	);
};

export default TV;
