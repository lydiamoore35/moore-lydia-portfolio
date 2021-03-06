
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Layout = ({children}) => {
  return (
    <body>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <div className="sideNav">
        <ul>
          <li>
            <a href="#AboutLink">ABOUT</a>
          </li>
          <li>
            <a href="#SkillsLink">SKILLS</a>
          </li>
          <li>
            <a href="#ProjectsLink">PROJECTS</a>
          </li>
          <li>
            <a href="#ContactLink">CONTACT</a>
          </li>
        </ul>
        <div id="sideNav_Img">
          <a href="https://docs.google.com/document/d/1EkiJoTGrcUgb_A5kf55LZ2YT6qKJ5aC9B9XBohvweAU/edit?usp=sharing" target="_blank" rel="noreferrer">
            <img classname=".tooltip" className="resumeIcon"src="https://img.icons8.com/fluent/96/000000/resume.png"alt="alternative text" title="Resume"/>
          </a>
          <a href="https://github.com/lydiamoore35" target="_blank" rel="noreferrer">
            <img className="git" src="https://img.icons8.com/cute-clipart/64/000000/github.png" alt="alternative text" title="GitHub"/>
          </a>
          <a href="https://www.linkedin.com/in/lydia-w-moore" target="_blank" rel="noreferrer">
            <img className="linkedIn_Img" src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt="alternative text" title="Linkedin"/>
          </a>
        </div>
      </div>
      <div className="Main">
        <main>{children}</main>
        <footer className="Footer">Website built with GatsbyJS.<br></br>Copyright © 2020 Lydia Moore. All rights reserved.
        </footer>
      </div>
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
