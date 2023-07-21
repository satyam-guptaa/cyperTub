import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './home.scss';
import {
	TRENDING_HEADING,
	RECOMMENDED_HEADING,
	INPUT_PLACEHOLDER,
} from '../../utilities/constants/appconstants';
import Search from '../../components/searchbar/Search';
import PlaceholderCard from '../../components/placeholders/PlaceholderCard';
import { useFilter } from '../../hooks/useFilter';
import CarouselNew from '../../components/carousel';
import RenderCardsNew from '../../components/cardhelper';

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
					<CarouselNew data={trendingCollection} />
				) : (
					<div className='home-trending-section-placeholder'>
						<PlaceholderCard type='large' />
					</div>
				)}
			</article>
			<article className='section-container'>
				<RenderCardsNew
					heading={RECOMMENDED_HEADING}
					filteredData={filteredData}
					inputVal={inputVal}
					appData={data}
				/>
			</article>
		</section>
	);
};

export default Home;
