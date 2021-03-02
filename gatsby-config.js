module.exports = {
  siteMetadata: {
    title: `Give me a font!`,
    description: `Just pick a font style and we will give you a font based in that choice.`,
    author: `Danilo Vilhena`,
    siteUrl: 'https://danilovilhena.com'
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "give-me-a-font",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
