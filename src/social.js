import React from 'react';

import './social.css';

export default ({ icon, url }) => (
	<li className="social">
		<a href={url} target="_blank" rel="noopener noreferrer" className="social__link">
			{icon}
		</a>
	</li>
)