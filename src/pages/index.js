import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import { Card, Container, Row, Col } from "react-bootstrap";

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <h1>Gatsby Video Gallery ({data.allYoutubeVideo.totalCount})</h1>
      </Container>
      <Container>
        <Row>
          {data.allYoutubeVideo.edges.map(({ node }) => (
            <Col md={4} className="mb-4">
              <Link to={node.videoId} className="card-link">
                <Card bg="dark" className="card-hover">
                  <Card.Img variant="top" src={node.thumbnail.url} />
                  <Card.Body>
                    <Card.Title>{node.title}</Card.Title>
                    <Card.Text>
                      <div class="small">{node.publishedAt}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}

        </Row>
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
          thumbnail {
            url
          }
        }
      }
    }
  }
`
