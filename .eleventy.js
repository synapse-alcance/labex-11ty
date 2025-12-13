module.exports = (config) => {
  config.addFilter("canonicalize", function(page) {
    const site = this.ctx.site.url.replace(/\/$/, "");
    const path = page.url || "/";
    return site + path;
  });
  config.addPassthroughCopy({
    "src/static/css" : "/css",
    "src/static/img" : "/img",
    "src/static/js" : "/js",
    "src/static/vid" : "/vid"
  });
	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
