import React from "react";
import { graphql } from "gatsby";
import GatsbyConfig from "../../gatsby-config";
import CustomHelmet from "../components/CustomHelmet";
import Layout from "../components/indexLayout";
import MemberCard from "../components/member_card";

function getMembers(data, team) {
	let members = [];
	// console.log(data[team]);
	let memberList = data[team].edges;

	memberList.map((element) => {
		return members.push(
			<MemberCard
				username={element.node.frontmatter.username}
				full_name={element.node.frontmatter.name}
				designation={element.node.frontmatter.designation}
				key={element.node.frontmatter.username}
			/>
		);
	});

	return members;
}

const TeamsPage = ({ data }) => (
	<Layout>
		<CustomHelmet page={GatsbyConfig.siteMetadata.alumni} />
		<div className="page">
			<div className="container">
				<h2>Batch of 2020</h2>
				<div className="team-section">{getMembers(data, "batch_2020")}</div>
			</div>
		</div>
	</Layout>
);

export default TeamsPage;

export const alumiQueryGraph = graphql`
	query alumniQuery {
		batch_2020: allMarkdownRemark(
			sort: { fields: [frontmatter___batch], order: ASC }
			filter: {
				fileAbsolutePath: { regex: "/alumni/.*md$/" }
				frontmatter: { batch: { regex: "/batch_2020/" } }
			}
		) {
			edges {
				node {
					frontmatter {
						username
						name
						designation
						batch
					}
				}
			}
		}
	}
`;
