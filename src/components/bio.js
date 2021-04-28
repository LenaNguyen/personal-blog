/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <p>
            <span role="img" aria-label="writing hand emoji">
              ✍️{"	"}
            </span>
            Written by <strong>{author}</strong>.{` `}
            Check out my{" "}
            <a href={`https://medium.com${social.medium}`}>Medium</a> for more!
          </p>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  {
    site {
      siteMetadata {
        author
        social {
          medium
        }
      }
    }
  }
`

export default Bio
