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
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

    </head>
    <div class="About" id="AboutLink">
        <div>
          <div class="Name">Lydia<br></br>Moore</div>
          <div class="Title"><u>Full-Stack<br></br>Software Engineer</u></div>
          <img src="https://i.imgur.com/jDnCN5y.jpg?2" width="70%" alt="pic"></img>
        </div>
      <h3 class="AboutTitle">ABOUT</h3>
      <div class="AboutDetails">
      My name is Lydia and I am a full-stack software engineer based in Colorado. Building new applications or enhancing preexisting code is how I express my keen attention to detail and relish in the satisfaction of completing tasks to their fullest extent. My previous experience involving behavioral assessments and transitioning data to mainstream technology has given me a unique perspective on interacting within the coding world.<br></br><br></br>I practice effective time allocation and maintain a detail-oriented workflow allowing me the necessary time to anticipate the needs of clients and team members. As a growing developer, it's important that I establish myself within a reputable and mission-driven company that will actively cultivate the strengths of its creators.
      </div>
      <div class="Skills" id="SkillsLink">
      <h3 class="TechnicalSkills">TECHNICAL SKILLS</h3>
        <ul class="SkillsIcons">
          <li>
            <img src="https://img.icons8.com/color/96/000000/html-5.png" alt="icon"/>
          </li>
          <li>
            <img src="https://p.kindpng.com/picc/s/476-4768341_javascript-logo-number-angularjs-node-javascript-transparent-background.png" alt="icon" height="96px"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/css3.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/github--v1.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/heroku.png" alt="icon"/>
          </li>
          <li>
            <img src="https://pbs.twimg.com/profile_images/1021778918842531840/FBVP_uDf.jpg" alt="netlify" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/visual-studio.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="icon"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/sql.png" alt="icon"/>
          </li>
          <li>
            <img src="https://miro.medium.com/max/502/1*a8vazziKqAGfX1FGObH95Q.png" alt="icon" height="96"/>
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
            <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react" height="96"/>
          </li>
          <li>
            <img src="https://www.sketchappsources.com/resources/source-image/sketch-icon-41.png" atl="icon" height="96"/>
          </li>
          <li>
            <img src="https://i.pinimg.com/280x280_RS/0f/b8/e6/0fb8e676a1cd0eae9b0f7ea862c40f93.jpg" alt="icon" height="96"/>
          </li>
          <li>
            <img src="https://cdn.auth0.com/blog/build-a-secure-express-api-using-postman-and-auth0/postman-logo.png" alt ="postman" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/stackoverflow.png" alt="icon"/>
          </li>
          <li>
            <img src="https://pbs.twimg.com/profile_images/687314343537569792/Hz7m5vRM_400x400.png" alt="milligram" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/windows/64/000000/bootstrap.png" alt="bootstrap" height="96"/>
          </li>
        </ul>
      </div>
    </div>
      <h3 class="Projects" id="ProjectsLink">PROJECTS</h3>
      <h4 class="uiHelp">* Hover over project for more info *</h4>
        <div></div>
        <div class="Project_3">
          <img src="https://i.imgur.com/yFYcW1H.png" alt="project_3_pic"/>
          <div class="center">
            <a href="https://github.com/lydiamoore35/Project_3_frontend" target="_blank"><button class="GitButton">GitHub</button></a>
            <button class="SiteButton">Visit Site</button>
            <div class="Project_3_text">
              <u><b>Ubuntu</b></u><br></br>I am because we are<br></br><br></br>Ubuntu is a full CRUD application that uses MERN stack technoglogy. The backend is organized using MVC file structure and has sign up and log in functionality. I deployed Ubuntu front end and back end through Netlify and Heroku, respectively.
            </div>
          </div>
        </div>
        <div class="Project_2">
          <img src="https://i.imgur.com/bUdBwlY.png" alt="project_2_pic"/>
          <div class="center">
          <a href="https://github.com/lydiamoore35/Project-2-frontend" target="_blank"><button class="GitButton">GitHub</button></a>
          <a href="https://lm-project-2.herokuapp.com" target="_blank"><button class="SiteButton">Visit Site</button></a>
            <div class="Project_2_text">
              <u><b>Create Your Cookbook</b></u><br></br><br></br>I built this application using HTML, CSS, Node.js, Mongoose, Express, and EJS. This app adheres to MVC file structure, 7 RESTful routes and full CRUD. The sign up and log in functionality includes an encrypted password and authorization flow. I deployed this site through Heroku.
            </div>
          </div>
        </div>
        <div class="Project_1">
          <img src="https://i.imgur.com/hs6xZvs.png" alt="project_1_pic"/>
          <div class="center">
            <a href="https://github.com/lydiamoore35/Project-1" target="_blank"><button class="GitButton">GitHub</button></a>
            <a href="https://lydiamoore35.github.io/Project-1/" target="_blank"><button class="SiteButton">Visit Site</button></a>
            <div class="Project_1_text">
              <u><b>WeatherWize</b></u><br></br><br></br>I built WeatherWize using HTML, CSS, JavaScript and JQuery, hosted on github pages. I used AJAX to request a weather API based on zip code. Once the user inputs their zipcode, the browser renders youth activities based on the tempurature. WeatherWize has a responsive design and complex user interface.
            </div>
          </div>
        </div>
        <div class="Project_4">
          <img src="https://i.imgur.com/MPN5d6j.jpg?1" alt="project_4_pic"/>
          <div class="center">
            <a href="" target="_blank"><button class="GitButton">GitHub</button></a>
            <a href="" target="_blank"><button class="SiteButton">Visit Site</button></a>
            <div class="Project_4_text">
              <u><b>Ruby on Rails with React</b></u><br></br><br></br>COMING SOON!
            </div>
          </div>
        </div>
        <h3 class="Contact">CONTACT INFO</h3>
          <div class="ContactInfo">
            <div>Lydia Moore  | Lydiamoore35@gmail.com  | 720-323-4928</div>
          </div>
    
  </Layout>
)

export default IndexPage
