import React from "react";
import Link from "gatsby-link";
import favicon from "../images/favicon.ico";
import Helmet from "react-helmet";
import GatsbyConfig from "../../gatsby-config";

const Header = ({ siteTitle }) => (
	<div className="nav-bar">
		<Helmet
			title={GatsbyConfig.siteMetadata.title}
			meta={[
				{ name: "description", content: "Developer Student Club(DTU)" },
				{
					name: "keywords",
					content: "Google, DSC, DTU, student",
				},
			]}
			link={[{ rel: "shortcut icon", type: "image/ico", href: `${favicon}` }]}
		/>

		<div className="container">
			<div className="nav-items">
				<span className="brand">{siteTitle}</span>
				<ul>
					<li>
						<Link to="/" activeClassName="active">
							Home
						</Link>
					</li>
					<li>
						<Link to="/projects" activeClassName="active">
							Projects
						</Link>
					</li>
					<li>
						<Link to="/events" activeClassName="active">
							Events
						</Link>
					</li>
					<li>
						<Link to="/blog" activeClassName="active">
							Blogs
						</Link>
					</li>
					<li>
						<Link to="/team" activeClassName="active">
							Team
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Header;
