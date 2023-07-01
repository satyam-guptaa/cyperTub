import React, { useState } from 'react';
import './search.scss';

const Search = () => {
	const [focus, setFocus] = useState(false);
	return (
		<section className='searchbar'>
			<img src='/assets/icon-search.svg' alt='search' />
			<input
				className='searchbar-input'
				type='text'
				placeholder='Search for movies or TV series'
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<div className={`${focus ? 'searchbar-underline' : ''}`}></div>
		</section>
	);
};

export default Search;
