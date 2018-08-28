module.exports = {
  siteMetadata: {
    title: 'SourceView Reader',
  },
  pathPrefix: `/KOREAN`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f1f1f1",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "src/images/SVReader.png", // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
     options: {
        // trackingId: "UA-122318872-1", --sourceviewthai.com
        trackingId: "UA-122992566-1",
        // Puts tracking script in the head instead of the body
       head: false,
       // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      },
     }
  ],
}
