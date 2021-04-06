import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <h1>Gatsby Video Gallery</h1>
      </Container>
      <Container>
        <h2>Videos ({data.allYoutubeVideo.totalCount})</h2>

        <ListGroup>
          {data.allYoutubeVideo.edges.map(({ node }) => (
            <ListGroupItem key={node.id}>
            <div class="text-light small">{node.publishedAt}</div>
            <h3>{node.title}</h3>
            <div>
                <Button variant="primary" href={"https://www.youtube.com/watch?v=" + node.videoId}>View <span class="sr-only">{node.title} </span>on Youtube</Button>{' '}
            </div>
            </ListGroupItem>
          ))}

        </ListGroup>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allYoutubeVideo {
      totalCount
      edges {
        node {
          id
          title
          description
          videoId
          publishedAt(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`
