import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <h1>Gatsby Video Gallery ({data.allYoutubeVideo.totalCount})</h1>

        <p>This is a demonstration of the use of a source plugin with Gatsby to display items from a selected YouTube channel, create a list, and programatically create a page for each item.</p>

        <p>The benefit is that as soon as a new item is uploaded to the channel, it can appear here on the site.</p>

        <p>Currently this plugin is only configured to connected to one or more channels. A great enhancement would be to add the ability to select a specific playlist.</p>
      </Container>
      <Container>
        <Row>
        {data.allYoutubeVideo.edges.map(({ node }) => (
            <Col md={4} className="mb-4">
              <Link to={node.videoId} className="card-link">
                <Card bg="dark" className="card-hover">
                  <GatsbyImage className="card-img-top" image={node.localThumbnail.childImageSharp.gatsbyImageData} alt={node.title} />
                  <Card.Body className="p-2">
                    <Card.Title>{node.title}</Card.Title>
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
          localThumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
