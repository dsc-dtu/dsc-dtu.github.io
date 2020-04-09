import React from "react";
import { graphql } from "gatsby";
import GatsbyConfig from "../../gatsby-config";
import CustomHelmet from "../components/CustomHelmet";
import Layout from "../components/indexLayout";
import MemberCard from "../components/member_card";
import Img from "gatsby-image";

function getMembers(data, team) {
	let members = [];
	console.log(data[team]);
	let memberList = data[team].edges;

	memberList.map((element) => {
		return members.push(
			<MemberCard
				username={element.node.frontmatter.username}
				full_name={element.node.frontmatter.name}
				designation={element.node.frontmatter.designation}
			/>
		);
	});

	return members;
}

const TeamsPage = ({ data }) => (
	<Layout>
		{/* <CustomHelmet page={GatsbyConfig.siteMetadata.team} />
		<div className="page">
			<div className="container">
				<h2>Team-Lead</h2>
				<div className="team-section">
					<div
						className="member-card white-bg elevate"
						onClick={() => window.open(`https://github.com/zenith1598`, "_blank")}
						onMouseEnter={() => {
							document.body.style.cursor = "pointer";
						}}
						onMouseLeave={() => {
							document.body.style.cursor = "default";
						}}
					>
						<Img fluid={data.imageCoord1.childImageSharp.fluid} className="profile-pic" />

						<div className="member-details">
							<h3 className="name">Kshitij Bansal</h3>
							<p className="designation">DSC Lead</p>
						</div>
					</div>
				</div>
				<h2>Team Web</h2>
				<div className="team-section">{getMembers(data, "web")}</div>
				<h2>Team ML</h2>
				<div className="team-section">{getMembers(data, "ml")}</div>
				<h2>Team Android</h2>
				<div className="team-section">{getMembers(data, "android")}</div>
				<h2>Non-tech team</h2>
				<div className="team-section">{getMembers(data, "pr")}</div>
			</div>
		</div> */}
		<h1>Projects</h1>
		{console.log(data)}
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
					}
				}
			}
		}
	}
`;
