import PlaceholderCard from '../placeholders/PlaceholderCard';
import Card from '../regularCard/Card';

const RenderCardsNew = ({ filteredData, heading, appData, inputVal }) => {
	return (
		<div>
			<h1>{heading}</h1>
			<div className='cards-container'>
				{filteredData && filteredData.length > 0 ? (
					filteredData.map((item) => (
						<Card key={item.title} cardData={item} />
					))
				) : (
					<>
						{appData.length === 0 && (
							<PlaceholderCard type='small' />
						)}
					</>
				)}
			</div>
			<div className='no-results-container'>
				{appData.length > 0 &&
					filteredData.length === 0 &&
					inputVal && <p>No Results found here for {inputVal}</p>}
			</div>
		</div>
	);
};

export default RenderCardsNew;
