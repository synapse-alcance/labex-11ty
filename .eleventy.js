const site = require("./src/_data/site.json");

module.exports = (config) => {
  config.addFilter("canonicalize", function(page) {
    const site = this.ctx.site.url.replace(/\/$/, "");
    const path = page.url || "/";
    return site + path;
  });
  config.addPassthroughCopy({
    "src/static/css" : site.baseurl + "/css",
    "src/static/icon" : site.baseurl + "/icon",
    "src/static/img" : site.baseurl + "/img",
    "src/static/js" : site.baseurl + "/js",
    "src/static/vid" : site.baseurl + "/vid",
    "src/static/misc/instructions-placeholder.pdf" : site.baseurl + "/pdf/instructions-placeholder.pdf"
  });
	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
