import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkContainer = styled.div`
  text-align: ${props => (props.prev ? "left" : "right")};
  width: ${props => (props.hasOverflow ? "100%" : "auto")};
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
export default ({ previous, next }) => {
  const [hasOverflow, setHasOverflow] = useState(false)
  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  useEffect(() => {
    if (prevEl && nextEl && prevEl.offsetTop !== nextEl.offsetTop) {
      return setHasOverflow(true)
    }
  }, [prevEl, nextEl])

  return (
    <Container>
      <LinkContainer ref={el => setPrevEl(el)} prev hasOverflow={hasOverflow}>
        {previous && (
          <Link to={`/blog${previous.fields.slug}`} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </LinkContainer>
      <LinkContainer ref={el => setNextEl(el)} hasOverflow={hasOverflow}>
        {next && (
          <Link to={`/blog${next.fields.slug}`} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </LinkContainer>
    </Container>
  )
}
