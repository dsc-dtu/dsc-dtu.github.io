module.exports = {
	siteMetadata: {
		title: "DSC-DTU",
		siteUrl: "https://dsc-dtu.github.io",
		events: {
			title: "DSC-DTU Events",
			siteUrl: "https://dsc-dtu.github.io/events",
		},
		team: {
			title: "DSC-DTU Team",
			siteUrl: "https://dsc-dtu.github.io/team",
		},
		blog: {
			title: "DSC-DTU Blog",
			siteUrl: "https://dsc-dtu.github.io/blog",
		},
		projects: {
			title: "DSC-DTU Projects",
			siteUrl: "https://dsc-dtu.github.io/projects",
		},
		alumni: {
			title: "DSC-DTU Alumni",
			siteUrl: "https://dsc-dtu.github.io/alumni",
		},
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-sass`,
		`gatsby-remark-copy-linked-files`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "DSC DTU",
				short_name: "DSC-DTU",
				start_url: "/",
				background_color: "white",
				theme_color: "black",
				display: "standalone",
				icon: "src/images/dsc-logo.png",
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 1080,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src`,
				name: "images",
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-101997744-5",
				// Puts tracking script in the head instead of the body
				head: true,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ["/preview/**", "/do-not-track/me/too/"],
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `green`,
				// Disable the loading spinner.
				showSpinner: false,
			},
		},
	],
};
