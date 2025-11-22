module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    try {
      return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }).format(dateObj);
    } catch (error) {
      return dateObj;
    }
  });

  eleventyConfig.addFilter("head", (collection = [], count = 1) => {
    if (!Array.isArray(collection)) {
      return [];
    }
    if (count >= 0) {
      return collection.slice(0, count);
    }
    return collection.slice(count);
  });

  eleventyConfig.addFilter("tagList", (collection = []) => {
    const tagSet = new Set();
    collection.forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  });

  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("./src/blog/**/*.{md,njk}")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "11ty.js"]
  };
};
