import React from 'react';
import {
	TV_HEADING,
	TV_INPUT_PLACEHOLDER,
	TV_TYPE,
} from '../../utilities/constants/appconstants';
import RenderCardsNew from '../../components/cardhelper';

const TV = () => {
	return (
		<RenderCardsNew
			searchInputPlaceholder={TV_INPUT_PLACEHOLDER}
			type={TV_TYPE}
			heading={TV_HEADING}
		/>
	);
};

export default TV;
