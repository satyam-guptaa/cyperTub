import React from 'react';
import { useSelector } from 'react-redux';
import { TV_HEADING, TV_TYPE } from '../../utilities/constants/appconstants';
import Search from '../../components/searchbar/Search';
import RenderCards from '../../components/card-helper/RenderCards.jsx';

const TV = () => {
	const { data } = useSelector((state) => state.appData);
	const tvData = data.filter((item) => item.category === TV_TYPE);

	return (
		<section className='section-container'>
			<Search />
			<h1>{TV_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards items={tvData} />
			</div>
		</section>
	);
};

export default TV;
