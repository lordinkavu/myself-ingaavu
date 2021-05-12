module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "html",
    "njk",
    "svg", // css is not yet a recognized template extension in Eleventy
  ]);
  return {
    markdownTemplateEngine: "njk",
  };
};
