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
      <div>
        <header>this is my header</header>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
