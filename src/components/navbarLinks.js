import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-weight: 700;
  box-shadow: none;

  :hover {
    color: coral;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">HOME</NavItem>
      <NavItem to="/blog">BLOG</NavItem>
      <NavItem to="/">GOALS</NavItem>
      <NavItem to="/404">ACTVIITIES</NavItem>
    </>
  )
}

export default NavbarLinks
