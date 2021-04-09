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
        apiKey: 'AIzaSyC5v57cq-5eMDZkQ4NPvnfbBCkTNY9nvGg',
        maxVideos: 50 // Defaults to 50
      },
    },
  ],
}
