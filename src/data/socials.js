import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faMastodon,
	faSteam,
	faStrava,
	faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faB } from '@fortawesome/free-solid-svg-icons';

export default [
	{
		url: "https://www.instagram.com/ajcarpenter/",
		icon: <FontAwesomeIcon icon={faInstagram} />
	},
	{
		url: "https://mastodon.xyz/@ajcarpenter",
		icon: <FontAwesomeIcon icon={faMastodon} />
	},
	{
		url: "https://www.threads.net/@ajcarpenter",
		icon: <FontAwesomeIcon icon={faThreads} />
	},
	{
		url: "https://bsky.app/profile/ajcarpenter.com",
		icon:  <FontAwesomeIcon icon={faB} />
	},
	{
		url: "https://www.linkedin.com/in/andrew-carpenter-24450b14/",
		icon: <FontAwesomeIcon icon={faLinkedin} />
	},
	{
		url: "https://github.com/ajcarpenter",
		icon: <FontAwesomeIcon icon={faGithub} />
	},
	{
		url: "https://steamcommunity.com/id/halfeatensausage/",
		icon: <FontAwesomeIcon icon={faSteam} />
	},
	{
		url: "https://www.strava.com/athletes/20111073",
		icon: <FontAwesomeIcon icon={faStrava} />
	}
];
