export default function (eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy('img');

  // Output directory: docs
  return {
    dir: {
      output: 'docs'
    },
    pathPrefix: '/'
  };
}
