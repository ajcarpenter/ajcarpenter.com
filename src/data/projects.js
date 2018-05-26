import React from 'react';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
	faBuilding,
	faMusic,
} from "@fortawesome/fontawesome-free-solid";

export default [
	{
		name: "Arcadian Labs",
		url: "http://arcadianlabs.com",
		isLive: false,
		thumbnail: require("../images/arcadian-labs-logo.svg"),
		categoryIcon: <FontAwesomeIcon icon={faBuilding} />,
		description: 'Full Stack Web Development'
	},
	{
		name: "Crone",
		url: "http://crone.band",
		isLive: true,
		thumbnail: require("../images/crone-logo.png"),
		categoryIcon: <FontAwesomeIcon icon={faMusic} />,
		description: 'Metal Band'
	}
];
