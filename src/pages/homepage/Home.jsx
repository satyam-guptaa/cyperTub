import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppData } from '../../store/appDataSlice';
import './home.scss';
import Carousel from '../../components/carousel/Carousel';
import {
	TRENDING_HEADING,
	RECOMMENDED_HEADING,
} from '../../utilities/constants/appconstants';
import Card from '../../components/regularCard/Card';

const Home = () => {
	const { data } = useSelector((state) => state.appData);
	const trendingCollection = useMemo(() => {
		return data.filter((item) => item.isTrending);
	}, [data]);

	return (
		<section className='home'>
			<article className='home-trending-section'>
				<h1>{TRENDING_HEADING}</h1>
				{trendingCollection && trendingCollection.length > 0 && (
					<Carousel data={trendingCollection} />
				)}
			</article>
			<article className='home-recommended-section'>
				<h1>{RECOMMENDED_HEADING}</h1>
				<section className='cards-container'>
					{data &&
						data.length > 0 &&
						data.map((item) => {
							return <Card key={item.title} cardData={item} />;
						})}
				</section>
			</article>
		</section>
	);
};

export default Home;
