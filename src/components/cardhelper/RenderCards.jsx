import PlaceholderCard from '../placeholders/PlaceholderCard';
import Card from '../regularCard/Card';

const RenderCards = ({ items, noAppData }) => {
	return items && items.length > 0 ? (
		items.map((item) => <Card key={item.title} cardData={item} />)
	) : (
		<>{noAppData && <PlaceholderCard type='small' />}</>
	);
};

export default RenderCards;
