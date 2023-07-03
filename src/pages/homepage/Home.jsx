import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppData } from '../../store/appDataSlice';
import './home.scss';
import Carousel from '../../components/carousel/Carousel';

const Home = () => {
	const { data } = useSelector((state) => state.appData);
	const dispatch = useDispatch();
	const trendingCollection = useMemo(() => {
		return data.filter((item) => item.isTrending);
	}, [data]);

	useEffect(() => {
		//to prevent refetching on each rerender except the reload of page
		if (data.length === 0) {
			dispatch(fetchAppData());
		}
	}, []);

	return (
		<section className='home-trending-section'>
			<h1>Trending</h1>
			{trendingCollection && trendingCollection.length > 0 && (
				<Carousel data={trendingCollection} />
			)}
		</section>
	);
};

export default Home;
