import React, { useState } from 'react';
import './search.scss';
import { INPUT_PLACEHOLDER } from '../../utilities/constants/appconstants';

const Search = () => {
	const [focus, setFocus] = useState(false);
	return (
		<div className='searchbar'>
			<img src='/assets/icon-search.svg' alt='search' />
			<input
				className='searchbar-input'
				type='text'
				placeholder={INPUT_PLACEHOLDER}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<div className={`${focus ? 'searchbar-underline' : ''}`}></div>
		</div>
	);
};

export default Search;
