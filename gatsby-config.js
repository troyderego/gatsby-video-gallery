require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
      title: "Gatsby Youtube Video Gallery",
      description: "A demo Gatsby site using gatsby-source-youtube-v3 to create a gallery from a Youtube channel."
    },
    plugins: [
      {
        resolve: `gatsby-source-youtube-v3`,
        options: {
          channelId: ['UCO2AwPJjrYzOm5i0MRLIIpQ'],
          apiKey: process.env.GATSBY_MY_YOUTUBEAPI,
          maxVideos: 50 // Defaults to 50
        },
      },
    ],
  }
  