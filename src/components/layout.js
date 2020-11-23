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
          <a href="#AboutLink">ABOUT</a>
          <a href="#SkillsLink">SKILLS</a>
          <a href="#ProjectsLink">PROJECTS</a>
          <a href="#ContactLink">CONTACT</a>
          <div id="sidenav_img">
            <a href="https://docs.google.com/document/d/1EkiJoTGrcUgb_A5kf55LZ2YT6qKJ5aC9B9XBohvweAU/edit?usp=sharing" target="_blank">
              <img class="resumeIcon"src="https://img.icons8.com/fluent/96/000000/resume.png"/>
            </a>
            <a href="https://github.com/lydiamoore35" target="_blank">
              <img class="git" src="https://img.icons8.com/cute-clipart/64/000000/github.png" alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/lydia-w-moore" target="_blank">
              <img class="linkedIn_img" src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt="linkedIn"/>
            </a>
          </div>
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
