import PlayerCard from "./PlayerCard";
import { data } from "../../helper/data";
import cardStyle from "./Card.module.scss";
const CardContainer = (props) => {
	const filteredData = data.filter((f) =>
		f.name.toLowerCase().includes(props.search.toLowerCase())
	);
	return (
		<div className={cardStyle.main}>
			{filteredData.map((card, i) => (
				<PlayerCard key={i} card={card} />
			))}
		</div>
	);
};

export default CardContainer;
