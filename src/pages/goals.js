import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"
import Table from "../components/table"

class Blog extends React.Component {
  render() {
    const {
      list: goalsList,
      title,
    } = this.props.data.allFile.edges[0].node.childMdx.frontmatter
    const headers = ["Goal", "Category", "Status"]
    return (
      <Layout location={this.props.location} title={title}>
        <Table headers={headers} />
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "goals" } }) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
              list {
                num_complete
                status
                tags
                title
                total
                type
              }
            }
          }
        }
      }
    }
  }
`
