import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import GoalsTable from "../components/goals/goalsTable"

class Blog extends React.Component {
  render() {
    const {
      list: goalsList,
      title: listTitle,
    } = this.props.data.allFile.edges[0].node.childMdx.frontmatter
    const { title } = this.props.data.site.siteMetadata
    const headers = ["Goal", "Category", "Status"]
    return (
      <Layout location={this.props.location} title={title}>
        <GoalsTable headers={headers} rows={goalsList} />
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "goals" } }) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
              list {
                num_complete
                completed
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
