import React from 'react';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faTwitter,
	faFacebook,
	faInstagram,
	faLinkedin,
	faSoundcloud
} from "@fortawesome/fontawesome-free-brands";

export default [
	{
		url: "https://github.com/ajcarpenter",
		icon: <FontAwesomeIcon icon={faGithub} />
	},
	{
		url: "https://twitter.com/ajcarpenter",
		icon: <FontAwesomeIcon icon={faTwitter} />
	},
	{
		url: "https://www.facebook.com/ajcarpenter",
		icon: <FontAwesomeIcon icon={faFacebook} />
	},
	{
		url: "https://www.instagram.com/ajcarpenter/",
		icon: <FontAwesomeIcon icon={faInstagram} />
	},
	{
		url: "https://www.linkedin.com/in/andrew-carpenter-24450b14/",
		icon: <FontAwesomeIcon icon={faLinkedin} />
	},
	{
		url: "https://soundcloud.com/ajcarpenter",
		icon: <FontAwesomeIcon icon={faSoundcloud} />
	}
];
