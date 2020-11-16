import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;1,600&display=swap" rel="stylesheet"></link>
      <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </>
    <div class="About">
      <div class="Name">Lydia Moore</div>
      <div class="Title">Full-Stack Software Engineer</div>

      <div class="MeImage">
        <img src="https://i.imgur.com/Ji1VQQ0.jpg" width="20%"></img>
      </div>
      <div class="AboutDetails">
        As a student in General Assembly’s Software Engineering Immersive course for full-stack development, I have embraced my keen attention to detail and goal completion determination to accomplish multiple projects to their fullest extent. I practice effective time allocation and maintain a detail-oriented workflow allowing me the necessary time to anticipate the needs of team members and instructors. I aspire to establish myself as a developer within a reputable and mission-driven company that will actively cultivate the strengths of its creators.
      </div>
      <div class="Skills">
  
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
