import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "@material-ui/core"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const landingImage = this.props.data.file.childImageSharp.fluid
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Box
          component={Img}
          maxWidth="80%"
          display="block"
          mx="auto"
          fluid={landingImage}
          alt="Abstract Face"
        />
        <h1>
          Hey there{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Thanks for checking out my website.</p>
        <p>
          I believe that life is about being bold, ambitious, and creative. This
          is where I document my journey to see how I've grown. I write about
          life, simple ways to have fun, and things I've built, in hopes that it
          adds some value to the world.
        </p>
        <p>Stay as long as you like!</p>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
