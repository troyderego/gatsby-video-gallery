<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Video Gallery Demo
</h1>

This is a demonstration of the use of a source plugin with [Gatsby](https://www.gatsbyjs.com) to display items from a selected YouTube channel, create a list, and programatically create a page for each item.

The benefit is that as soon as a new item is uploaded to the channel, it can appear here on the site. 

Currently this plugin is only configured to connected to one or more channels. A great enhancement would be to add the ability to select a specific playlist.

## Plugins

- [gatsby-source-youtube-v3](https://www.gatsbyjs.com/plugins/gatsby-source-youtube-v3/?=youtube)
- [react-bootstrap](https://react-bootstrap.github.io)

## 💫 Deploy Locally
1. Clone this repo
2. CD in the the working directory and run `npm install`
3. Create and add a YouTube api key  - [how to create YouTube API Key 2021](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjLu4OjrfHvAhWaZM0KHd0sCS8QwqsBMAF6BAgTEBo&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3jZ5vnv-LZc&usg=AOvVaw1NnMpA_ozv868bawohH1Tk)
4. Create at the root called `evn.develop` and add your YouTube api key.
    ```shell
    # Inside .env.development
    GATSBY_MY_YOUTUBEAPI="<<YOUTUBE API KEY>>"
    ```

5. Rename `gatsby-config.js.template` to `gatsby-config.js`
6. Add your site metadata.
7. Add the desired YouTube Channel ID - [Find your YouTube user & channel IDs](https://support.google.com/youtube/answer/3250431?hl=en)
8. Run `gatsby develop`
