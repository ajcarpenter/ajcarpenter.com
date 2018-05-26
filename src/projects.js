import React from "react";

import "./projects.css";

import Project from "./project";

export default ({ items }) => (
	<div className="projects">
		<h2 className="projects__title">Projects</h2>
		<ul className="projects__items">
			{items.map(project => <Project {...project} key={project.url} />)}
		</ul>
	</div>
);
