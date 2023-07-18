import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './home.scss';
import Carousel from '../../components/carousel/Carousel';
import {
	TRENDING_HEADING,
	RECOMMENDED_HEADING,
	INPUT_PLACEHOLDER,
} from '../../utilities/constants/appconstants';
import Search from '../../components/searchbar/Search';
import PlaceholderCard from '../../components/placeholders/PlaceholderCard';
import RenderCards from '../../components/card-helper/RenderCards.jsx';
import { useFilter } from '../../hooks/useFilter';

const Home = () => {
	const { data } = useSelector((state) => state.appData);
	const trendingCollection = useMemo(() => {
		return data.filter((item) => item.isTrending);
	}, [data]);
	const [filteredData, handleOnChange, inputVal] = useFilter(data);

	return (
		<section className='home'>
			<Search
				placeholder={INPUT_PLACEHOLDER}
				onChange={handleOnChange}
				value={inputVal}
			/>
			<article className='home-trending-section'>
				<h1>{TRENDING_HEADING}</h1>
				{trendingCollection && trendingCollection.length > 0 ? (
					<Carousel data={trendingCollection} />
				) : (
					<div className='home-trending-section-placeholder'>
						<PlaceholderCard type='large' />
					</div>
				)}
			</article>
			<article className='home-recommended-section'>
				<h1>{RECOMMENDED_HEADING}</h1>
				<section className='cards-container'>
					<RenderCards
						items={filteredData}
						noAppData={data.length === 0}
					/>
					{data.length > 0 &&
						filteredData.length === 0 &&
						inputVal && <p>No Results found here for {inputVal}</p>}
				</section>
			</article>
		</section>
	);
};

export default Home;
