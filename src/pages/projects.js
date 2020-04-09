import React from "react";
import { graphql } from "gatsby";
import GatsbyConfig from "../../gatsby-config";
import CustomHelmet from "../components/CustomHelmet";
import Layout from "../components/indexLayout";
import ProjectCard from "../components/project_card";

function getProjects(data) {
	let projects = [];

	data.forEach((element, index) => {
		projects.push(<ProjectCard data={element.node.frontmatter} index={index} key={`project_${index}`} />);
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
						Ullamco magna aute consectetur labore incididunt est ullamco. Eiusmod culpa ipsum laboris dolore culpa velit
						velit eiusmod labore. Voluptate mollit cupidatat commodo et deserunt qui mollit ad mollit deserunt
						reprehenderit. Sunt duis fugiat cillum deserunt pariatur do anim. Esse amet ut do anim aute laboris anim
						commodo minim ex minim. Here are some of our projects that you can contribute to and work with some of our
						very skilled members.
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
						id
						name
						description
						github
						icon
						url
					}
				}
			}
		}
	}
`;
