/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
// import IndexPage from "../pages/index.js"

const Layout = ({children}) => {
  return (
    <body>
      <div class="Main">
        <div class="sidenav">
          <a href="#About">ABOUT</a>
          <a href="#">SKILLS</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
          <a href="#">RESUME</a>
      </div>
      <main>{children}</main>
      <footer class="Footer">
        Copyright © 2020 created by Lydia Moore. All rights reserved.
      </footer>
      </div>
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
