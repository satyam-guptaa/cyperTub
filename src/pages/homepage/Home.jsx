import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './home.scss';
import Carousel from '../../components/carousel/Carousel';
import {
	TRENDING_HEADING,
	RECOMMENDED_HEADING,
} from '../../utilities/constants/appconstants';
import Search from '../../components/searchbar/Search';
import PlaceholderCard from '../../components/placeholders/PlaceholderCard';
import RenderCards from '../../components/card-helper/RenderCards.jsx';

const Home = () => {
	const { data } = useSelector((state) => state.appData);
	const trendingCollection = useMemo(() => {
		return data.filter((item) => item.isTrending);
	}, [data]);

	return (
		<section className='home'>
			<Search />
			<article className='home-trending-section'>
				<h1>{TRENDING_HEADING}</h1>
				{trendingCollection && trendingCollection.length > 0 ? (
					<Carousel data={trendingCollection} />
				) : (
					<div className='home-trending-section-placeholder'>
						<PlaceholderCard type='large' />
						<PlaceholderCard type='large' />
					</div>
				)}
			</article>
			<article className='home-recommended-section'>
				<h1>{RECOMMENDED_HEADING}</h1>
				<section className='cards-container'>
					<RenderCards items={data} />
				</section>
			</article>
		</section>
	);
};

export default Home;
