import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import Video from "../components/video"
import { Container } from "react-bootstrap";

class Post extends Component {
  render() {
    const post = this.props.data.youtubeVideo

    return (
      <>
        <Layout>
          <Container>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <Video
              videoSrURL={"https://www.youtube.com/embed/" + post.videoId}
              videoTitle={post.title}
            />
          </Container>
        </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const pageQuery = graphql`
  query($id: String!) {
    youtubeVideo(id: { eq: $id }) {
      title
      description
      videoId
    }
  }
`