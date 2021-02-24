module.exports = {
  siteMetadata: {
    title: "give-me-a-font",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
