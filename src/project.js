import React from "react";
// import Tilt from 'react-tilt';

import "./project.css";

export default ({ url, name, isLive, thumbnail, categoryIcon, description }) => (
	<li className="project">
		<a
			className="project__card"
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			style={{ backgroundImage: `url(${thumbnail})` }}
		>
			<div className="project__description">
				<div className="project__category-icon">{categoryIcon}</div>
				{ description }
			</div>
		</a>
	</li>
);
