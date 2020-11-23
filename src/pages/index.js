import React from "react"
// import { Link } from "gatsby"

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
          <div class="Name">Lydia<br></br>Moore</div>
          <div class="Title"><u>Full-Stack<br></br>Software Engineer</u></div>
          <img src="https://i.imgur.com/CzU5GJa.jpg?2" width="70%" alt="pic"></img>
        </div>
      <h3 class="AboutTitle">ABOUT</h3>
      <div class="AboutDetails">
      Hello, my name is Lydia and I am a modern software engineer seeking opportunity in the programming world. For the past 5 months I have been completing General Assembly’s Software Engineering Immersive course for full-stack development. My previous experience involving<br></br><br></br>I have embraced my keen attention to detail and goal completion determination to accomplish multiple projects to their fullest extent. I practice effective time allocation and maintain a detail-oriented workflow allowing me the necessary time to anticipate the needs of team members and instructors. I aspire to establish myself as a developer within a reputable and mission-driven company that will actively cultivate the strengths of its creators.
      </div>
      <div class="Skills">
      <h3 class="TechnicalSkills">TECHNICAL SKILLS</h3>
        <ul>
          <li>
            <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/stackoverflow.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/css3.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/github--v1.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/heroku.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/visual-studio.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/html-5.png" alt="icon"/>
          </li>
          <li>
            <img src="https://p.kindpng.com/picc/s/476-4768341_javascript-logo-number-angularjs-node-javascript-transparent-background.png" alt="icon" height="96px"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/sql.png" alt="icon"/>
          </li>
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYXjvK9xFgNCPeHeRlJcXQrOWOdtiAkEYzg&usqp=CAU" alt="express" height="96px" width="131"/>
          </li>
          <li>
            <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png" alt="icon" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="icon" height="96"/>
          </li>
          <li>
            <img src="https://pbs.twimg.com/profile_images/687314343537569792/Hz7m5vRM_400x400.png" alt="icon" height="96"/>
          </li>
          <li>
            <img src="https://www.sketchappsources.com/resources/source-image/sketch-icon-41.png" atl="icon" height="96"/>
          </li>
          <li>
            <img src="https://i.pinimg.com/280x280_RS/0f/b8/e6/0fb8e676a1cd0eae9b0f7ea862c40f93.jpg" alt="icon" height="96"/>
          </li>
          <li>
            <img src="https://cdn.auth0.com/blog/build-a-secure-express-api-using-postman-and-auth0/postman-logo.png" alt ="icon" height="96"/>
          </li>
          <li>
            <img src="https://miro.medium.com/max/502/1*a8vazziKqAGfX1FGObH95Q.png" alt="icon" height="96"/>
          </li>
          <li>
            <img src="https://pbs.twimg.com/profile_images/1021778918842531840/FBVP_uDf.jpg" alt="Trello" height="96"/>
          </li>
          <li>
            <img src="https://i.dlpng.com/static/png/432835_preview.png" alt="icon" height="96"/>
          </li>
        </ul>
      </div>
    </div>
      <h3 class="Projects">PROJECTS</h3>
        <div></div>
        <div class="Project_1">
          <img src="https://i.imgur.com/hs6xZvs.png" alt="project_1_pic"/>
          <div class="center">
            <div class="Project_1_text">
              <u><b>WeatherWize</b></u><br></br><br></br>...utilizes AJAX to request weather API based on user zip code to then display youth activities based on the tempurature. This application inlcudes HTML, CSS, JavaScript and jQuery to create a responsive design. Created WeatherWize to be fully functional on desktop and mobile devices by manipulating the DOM with Chrome devtools.Implemented a sticky navbar
            </div>
          </div>
        </div>
        <div class="Project_3">
          <img src="https://i.imgur.com/yFYcW1H.png" alt="project_3_pic"/>
          <div class="center">
            <div class="Project_3_text">
              <u>Ubuntu</u><br></br>I am because we are<br></br><br></br>Ubuntu is an application that allows users to sign up and log in to thier account to create, view, update, and/or delete community projects in thier area.<br></br>Ubuntu includes front end and back end application through Heroku and Netlify.
            </div>
          </div>
        </div>
        <h3 class="Contact">CONTACT ME</h3>
        <h3 class="Resume">RESUME</h3>
    
  </Layout>
)

export default IndexPage
