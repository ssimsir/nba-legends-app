import React, { useState } from "react";
import cardStyle from "./Card.module.scss";
import Statistics from "./Statistics";

const PlayerCard = (props) => {
	const { name, img, statistics } = props.card;

	const [isStatisticsVisible, setIsStatisticsVisible] = useState(false);
	const changeStyle = () => {
		isStatisticsVisible ? setIsStatisticsVisible(false) : setIsStatisticsVisible(true)
	}
	return (
		<div className={cardStyle.card}>
			<div className={cardStyle.imgDiv}>
				<img onClick={changeStyle} className={cardStyle.img} src={img} alt="" />
			</div>
			<h1 className={cardStyle.h1}>{name}</h1>
			<div className={
					`${cardStyle.statistics} ${isStatisticsVisible ? cardStyle.statisticsVisible : cardStyle.statisticsHidden}`
				} onClick={changeStyle}>
				<Statistics statistics={statistics} />
			</div>
		</div>
	);
};

export default PlayerCard;
