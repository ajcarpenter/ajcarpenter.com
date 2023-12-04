import React from "react";

import Social from "./social";

import './socials.css';

export default ({ items }) => (
	<div className="socials">
		<ul className="socials__items">
			{items.map(social => <Social {...social} key={social.url} />)}
		</ul>
	</div>
);
