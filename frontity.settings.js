const settings = {
  name: "c4rl0sbr4v0.me",
  state: {
    frontity: {
      url: "https://carlosbravo.me/",
      title: "Carlos Bravo",
      description: "WordPress Developer @ Automattic",
    },
  },
  packages: [
    {
      name: "c4rl0sbr4v0-theme",
      state: {
        theme: {
          menu: [
            ["Posts", "/"],
            ["About", "https://github.com/c4rl0sbr4v0"],
            ["Videogames", "https://www.backloggd.com/u/Ch0rl0/games/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://public-api.wordpress.com/wp/v2/sites/carlosbravo84801702.wordpress.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
