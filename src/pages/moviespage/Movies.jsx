import React from 'react';
import {
	MOVIES_HEADING,
	MOVIE_INPUT_PLACEHOLDER,
	MOVIE_TYPE,
} from '../../utilities/constants/appconstants';
import RenderCardsNew from '../../components/cardhelper';

const Movies = () => {
	return (
		<RenderCardsNew
			searchInputPlaceholder={MOVIE_INPUT_PLACEHOLDER}
			type={MOVIE_TYPE}
			heading={MOVIES_HEADING}
		/>
	);
};

export default Movies;
