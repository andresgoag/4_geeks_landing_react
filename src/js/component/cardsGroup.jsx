import React from "react";
import PropTypes from "prop-types";

import { Card } from "./card.jsx";

export const CardsGroup = props => {
	const items = props.items;

	return (
		<div className="card-group d-flex justify-content-around flex-wrap">
			{items.map((item, index) => {
				return (
					<Card
						imageUrl={item.imageUrl}
						title={item.title}
						text={item.text}
						key={index}
					/>
				);
			})}
		</div>
	);
};

CardsGroup.propTypes = {
	items: PropTypes.array
};
