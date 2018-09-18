module.exports = {
  siteMetadata: {
    title: 'SourceView Reader',
  },
  pathPrefix: `/WEB`,
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
    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        credential: require("./firebase-key.json"),

        // your firebase database root url
        databaseURL: "https://sourceview-reader.firebaseio.com",

        // you can have multiple "types" that point to different paths
        types: [
        //   {
        //     // this type will become `allEnglish` in graphql
        //     type: "English",

        //     // the path to get the records from
        //     path: "English",

        //     // probably don't want your entire database, use the query option
        //     // to limit however you'd like
        //     // query: ref => ref.limitToLast(10)

        //     // This allows you to map your data to data that GraphQL likes:
        //     // 1. Turn your lists into actual arrays
        //     // 2. Fix keys that GraphQL hates. It doesn't allow number keys
        //     //    like "0", you'll get this error pretty often:
        //     //    Error: Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "0" does not
        //     // 3. Remove stuff you don't need.
        //     //
        //     // Feel free to mutate, we sent you a copy anyway.
        //     map: node => {
        //       // fix keys graphql hates
        //       // node.threehundred = node['300']
        //       // delete node['300']

        //       // convert a child list to an array:
        //       return node.sessions = Object.keys(node.sessions).map(key => {
        //         return { _key: key, session: node.sessions[key] }
        //       })

        //       // finally, return the node
        //       return node
        //     },
        //   },

          // if you're data is really simple, this should be fine too
          {
            type: "English",
            path: "English",
          }
        ]
      }
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
