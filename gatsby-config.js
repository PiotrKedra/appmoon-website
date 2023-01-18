require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.codenauts.io/`,
    title: `Custom Software & Embedded Development | Codenauts`,
    description: `We provide tailor-made IT solutions. Web applications, embedded systems, mobile apps, desktop apps. Transfer your idea to a real world solution!`,
    author: `Codenauts`,
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
        "name": "locale",
        "path": `${__dirname}/translations/`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Codenauts.io',
        short_name: 'Codenauts',
        start_url: '/',
        background_color: '#1B1B1B',
        theme_color: '#354DCA',
        display: 'standalone',
        icon: 'src/images/codenauts-favicon.png',
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
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `pl`],
        defaultLanguage: `en`,
        siteUrl: `https://www.codenauts.io/`,
        redirect: false,
      }
    },
    `gatsby-plugin-sitemap`,
  ]
};
