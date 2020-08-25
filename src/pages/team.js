import React from "react";
import { graphql } from "gatsby";
import GatsbyConfig from "../../gatsby-config";
import CustomHelmet from "../components/CustomHelmet";
import Layout from "../components/indexLayout";
import MemberCard from "../components/member_card";
import Img from "gatsby-image";

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
		<CustomHelmet page={GatsbyConfig.siteMetadata.team} />
		<div className="page">
			<div className="container">
				<h2>Team-Lead</h2>
				<div className="team-section">
					{/* Card for coordinators */}
					<div
						className="member-card white-bg elevate"
						onClick={() =>
							window.open(`https://github.com/priyanka2399`, "_blank")
						}
						onMouseEnter={() => {
							document.body.style.cursor = "pointer";
						}}
						onMouseLeave={() => {
							document.body.style.cursor = "default";
						}}
					>
						<Img
							fluid={data.imageCoord1.childImageSharp.fluid}
							className="profile-pic"
						/>

						<div className="member-details">
							<h3 className="name">Priyanka Agarwal</h3>
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
		</div>
	</Layout>
);

export default TeamsPage;

export const teamQuery = graphql`
	query membersQuery {
		web: allMarkdownRemark(
			sort: { fields: [frontmatter___designation], order: DESC }
			filter: {
				fileAbsolutePath: { regex: "/members/.*md$/" }
				frontmatter: { designation: { regex: "/Web/" } }
			}
		) {
			edges {
				node {
					frontmatter {
						username
						name
						designation
					}
				}
			}
		}
		android: allMarkdownRemark(
			sort: { fields: [frontmatter___designation], order: DESC }
			filter: {
				fileAbsolutePath: { regex: "/members/.*md$/" }
				frontmatter: { designation: { regex: "/Android/" } }
			}
		) {
			edges {
				node {
					frontmatter {
						username
						name
						designation
					}
				}
			}
		}
		ml: allMarkdownRemark(
			sort: { fields: [frontmatter___designation], order: DESC }
			filter: {
				fileAbsolutePath: { regex: "/members/.*md$/" }
				frontmatter: { designation: { regex: "/ML/" } }
			}
		) {
			edges {
				node {
					frontmatter {
						username
						name
						designation
					}
				}
			}
		}
		pr: allMarkdownRemark(
			sort: { fields: [frontmatter___designation], order: DESC }
			filter: {
				fileAbsolutePath: { regex: "/members/.*md$/" }
				frontmatter: { designation: { regex: "/(Non-Tech|PR|Designer)/" } }
			}
		) {
			edges {
				node {
					frontmatter {
						username
						name
						designation
					}
				}
			}
		}
		imageCoord1: file(relativePath: { eq: "images/priyankaA.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;
