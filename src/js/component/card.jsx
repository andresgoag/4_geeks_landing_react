import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card">
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={props.link} className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	link: PropTypes.string
};
