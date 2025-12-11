module.exports = (config) => {
  config.addFilter("canonicalize", function(page) {
    const site = this.ctx.site.url.replace(/\/$/, "");
    const path = page.url || "/";
    return site + path;
  });
	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
