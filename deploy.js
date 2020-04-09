const ghp = require("gh-pages");

ghp.publish(
	"public",
	{
		branch: "master",
	},
	(err) => {
		if (err) {
			console.log(err);
		}
	}
);
