require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Custom Software & Embedded Development - Codenauts`,
    siteUrl: `https://www.codenauts.io/`,
    description: `We provide tailor-made IT solutions. Web applications, embedded systems, mobile apps, desktop apps. Transfer your idea to a real world solution!`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Codenauts',
        short_name: 'Codenauts',
        start_url: '/',
        background_color: '#07090D',
        theme_color: '#137CDE',
        display: 'standalone',
        icon: 'src/images/codenauts.png',
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-829KN1WC07",
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ]
};
