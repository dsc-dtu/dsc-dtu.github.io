import React from "react";
import { graphql } from "gatsby";
import GatsbyConfig from "../../gatsby-config";
import CustomHelmet from "../components/CustomHelmet";
import Layout from "../components/indexLayout";
import ProjectCard from "../components/project_card";

function getProjects(data) {
	let projects = [];

	data.forEach((element, index) => {
		projects.push(<ProjectCard data={element.node.frontmatter} key={`project_${index}`} />);
	});

	return projects;
}

const TeamsPage = ({ data }) => (
	<Layout>
		<CustomHelmet page={GatsbyConfig.siteMetadata.projects} />
		<div className="page">
			<div className="container">
				<div className="project-header">
					<p className="header">Open Source Projects powered by DSC DTU</p>
					<p style={{ fontSize: "20px" }}>
						Open source is a philosophy and a movement. We at DSC-DTU bring to you some Open Source Projects powered by
						us, inviting new ideas, adaptations and innovations, to drive forward the movement. Here are some of our
						projects that you can contribute to and work with our team.
					</p>
				</div>
				<section className="project-section">
					<div style={{ width: "100%" }}>{getProjects(data.all.edges)}</div>
				</section>
			</div>
		</div>
	</Layout>
);

export default TeamsPage;

export const projectsQuery = graphql`
	query projectsQuery {
		all: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/.*md$/" } }) {
			edges {
				node {
					frontmatter {
						name
						description
						github
						icon
					}
				}
			}
		}
	}
`;
