import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
	TV_HEADING,
	TV_INPUT_PLACEHOLDER,
	TV_TYPE,
} from '../../utilities/constants/appconstants';
import Search from '../../components/searchbar/Search';
import RenderCards from '../../components/card-helper/RenderCards.jsx';
import { useFilter } from '../../hooks/useFilter';

const TV = () => {
	const { data } = useSelector((state) => state.appData);
	const tvData = useMemo(() => {
		return data.filter((item) => item.category === TV_TYPE);
	}, [data]);
	const [filteredData, handleOnChange, inputVal] = useFilter(tvData);

	return (
		<section className='section-container'>
			<Search
				placeholder={TV_INPUT_PLACEHOLDER}
				onChange={handleOnChange}
				value={inputVal}
			/>
			<h1>{TV_HEADING}</h1>
			<div className='cards-container'>
				<RenderCards
					items={filteredData}
					noAppData={tvData.length === 0}
				/>
			</div>
			{data.length > 0 && filteredData.length === 0 && inputVal && (
				<p>No Results</p>
			)}
		</section>
	);
};

export default TV;
