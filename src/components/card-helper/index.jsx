import { useMemo } from 'react';
import PlaceholderCard from '../placeholders/PlaceholderCard';
import Card from '../regularCard/Card';
import { useSelector } from 'react-redux';
import { useFilter } from '../../hooks/useFilter';
import Search from '../searchbar/Search';

const RenderCardsNew = ({ searchInputPlaceholder, type, heading }) => {
	const { data } = useSelector((state) => state.appData);
	//so that data not keep changing on every render unless storedata changes
	const categoryData = useMemo(() => {
		return data.filter((item) => item.category === type);
	}, [data]);
	const [filteredData, handleOnChange, inputVal] = useFilter(categoryData);

	return (
		<section className='section-container'>
			<Search
				placeholder={searchInputPlaceholder}
				value={inputVal}
				onChange={handleOnChange}
			/>
			<h1>{heading}</h1>
			<div className='cards-container'>
				{filteredData && filteredData.length > 0 ? (
					filteredData.map((item) => (
						<Card key={item.title} cardData={item} />
					))
				) : (
					<>{data.length === 0 && <PlaceholderCard type='small' />}</>
				)}
			</div>
			<div className='no-results-container'>
				{data.length > 0 && filteredData.length === 0 && inputVal && (
					<p>No Results found here for {inputVal}</p>
				)}
			</div>
		</section>
	);
};

export default RenderCardsNew;
