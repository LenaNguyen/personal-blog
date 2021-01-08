import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const LandingImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`
class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <LandingImage src="./03.png" alt="Abstract Face" />
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
  }
`
