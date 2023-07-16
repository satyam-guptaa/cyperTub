import React from 'react';
import { useSelector } from 'react-redux';
import { TV_HEADING, TV_TYPE } from '../../utilities/constants/appconstants';
import Card from '../../components/regularCard/Card';
import Search from '../../components/searchbar/Search';

const TV = () => {
	const { data } = useSelector((state) => state.appData);
	const tvData = data.filter((item) => item.category === TV_TYPE);

	return (
		<section className='section-container'>
			<Search />
			<h1>{TV_HEADING}</h1>
			<div className='cards-container'>
				{tvData.map((tv) => {
					return <Card key={tv.title} cardData={tv} />;
				})}
			</div>
		</section>
	);
};

export default TV;
