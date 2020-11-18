import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;1,600&display=swap" rel="stylesheet"></link>
    </head>
    <div class="About">
        <div>
          <img src="https://i.imgur.com/Ji1VQQ0.jpg" width="50%"></img>
          <div class="Lydia">Lydia</div>
          <div class="Moore">Moore</div>
          <div class="Title">Full-Stack Software Engineer</div>
        </div>
      <div class="AboutDetails">
        As a student in General Assembly’s Software Engineering Immersive course for full-stack development, I have embraced my keen attention to detail and goal completion determination to accomplish multiple projects to their fullest extent. I practice effective time allocation and maintain a detail-oriented workflow allowing me the necessary time to anticipate the needs of team members and instructors. I aspire to establish myself as a developer within a reputable and mission-driven company that will actively cultivate the strengths of its creators.
      </div>
      <div class="Skills">
        <ul>
          <li>
            <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/stackoverflow.png"/>
          </li>
          <li></li>
        </ul>
      </div>
      </div>
    
  </Layout>
)

export default IndexPage
