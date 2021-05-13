module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addFilter("filterTagList", tags => {
    // should match the list in tags.njk
    return (tags || []).filter(tag => ["post", "note",].indexOf(tag) === -1);
  })
  return {
    markdownTemplateEngine: "njk",
  };
};
