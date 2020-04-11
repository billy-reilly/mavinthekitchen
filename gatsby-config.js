require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Mav in the Kitchen`,
    description: `Welcome to my little vegetarian home kitchen, based in SW London.`,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.WORDPRESS_ADDRESS,
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostingWPCOM: false,
        useACF: false,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: process.env.INSTA_HANDLE,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mav In The Kitchen`,
        short_name: `mavinthekitchen`,
        start_url: `/`,
        // background_color: `#663399`, // TODO ?
        // theme_color: `#663399`, // TODO ?
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`,
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
