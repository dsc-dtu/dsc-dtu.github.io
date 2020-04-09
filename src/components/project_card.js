import React, { Fragment } from "react";

const ProjectCard = ({ data }) => (
	<div className="project-card elevate white-bg">
		<div className="card-content">
			<img src={data.icon} alt={data.name} className="icon" />
			<div className="text">
				<div className="title">
					<div>{data.name}</div>
				</div>
				<div>{data.description}</div>
				<div className="link-box">
					<a href={data.github} target="default">
						<button style={{ backgroundColor: "black" }}>Github</button>
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectCard;
