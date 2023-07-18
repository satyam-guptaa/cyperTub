import React, { useState } from 'react';
import './search.scss';

const Search = ({ placeholder, value, onChange }) => {
	const [focus, setFocus] = useState(false);
	return (
		<div className='searchbar'>
			<img src='/assets/icon-search.svg' alt='search' />
			<input
				className='searchbar-input'
				type='text'
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<div className={`${focus ? 'searchbar-underline' : ''}`}></div>
		</div>
	);
};

export default Search;
