import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <title>Lydia Moore's Portfolio</title>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;1,600&display=swap" rel="stylesheet"></link>
    </head>
    <div class="About" id="AboutLink">
        <div>
          <div class="Name">Lydia<br></br>Moore</div>
          <div class="Title"><u>Full-Stack<br></br>Software Engineer</u></div>
          <img src="https://i.imgur.com/qPZQzCd.jpg?1" width="60%" alt="pic"></img>
        </div>
      <h3 class="AboutTitle">ABOUT</h3>
      <div class="AboutDetails">
      Hi, I'm Lydia and I am a full-stack software engineer based in Colorado. Building new applications or enhancing preexisting code is how I express my keen attention to detail and relish in the satisfaction of completing tasks to their fullest extent. My previous experience involving behavioral assessments and transitioning data to mainstream technology has given me a unique perspective on interacting within the coding world.<br></br><br></br>I practice effective time allocation and maintain a detail-oriented workflow allowing me the necessary time to anticipate the needs of clients and team members. As a growing developer, it's important that I establish myself within a reputable and mission-driven company that will actively cultivate the strengths of its creators.
      </div>
      <div class="Skills" id="SkillsLink">
      <h3 class="TechnicalSkills">TECHNICAL SKILLS</h3>
      <h5 class="uiHelpSkills">Hover over skill</h5>
        <ul class="SkillsIcons">
          <li>
            <img src="https://img.icons8.com/color/96/000000/html-5.png" /*alt="html5"*/ alt="alternative text" title="HTML5"/>
          </li>
          <li>
            <img src="https://img.icons8.com/ios-filled/100/000000/javascript-logo.png" alt="alternative text" title="JavaScript" height="96px"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/css3.png" /*alt="css3"*/ alt="alternative text" title="css3"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/github--v1.png" /*alt="github"*/ alt="alternative text" title="GitHub"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" /*alt="Ruby"*/ alt="alternative text" title="Ruby on Rails"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/heroku.png" /*alt="heroku"*/ alt="alternative text" title="Heroku"/>
          </li>
          <li>
            <img src="https://pbs.twimg.com/profile_images/1021778918842531840/FBVP_uDf.jpg" /*alt="netlify"*/ alt="alternative text" title="Netlify" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/visual-studio.png" /*alt="vscode"*/ alt="alternative text" title="Visual Studio Code"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/nodejs.png" /*alt="nodejs"*/ alt="alternative text" title="Node.js"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/sql.png" /*alt="sql"*/ alt="alternative text" title="SQL"/>
          </li>
          <li>
            <img src="https://miro.medium.com/max/502/1*a8vazziKqAGfX1FGObH95Q.png" /*alt="postgreSQL"*/ alt="alternative text" title="postgreSQL" height="96"/>
          </li>
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYXjvK9xFgNCPeHeRlJcXQrOWOdtiAkEYzg&usqp=CAU" /*alt="express"*/ alt="alternative text" title="Express" height="96px" width="131"/>
          </li>
          <li>
            <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png" /*alt="jQuery"*/ alt="alternative text" title="jQuery" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/mongodb.png" /*alt="Mongoose & mongoDB"*/ alt="alternative text" title="Mongoose & mongoDB"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/react-native.png" /*alt="react"*/ alt="alternative text" title="React" height="96"/>
          </li>
          <li>
            <img src="https://www.sketchappsources.com/resources/source-image/sketch-icon-41.png" /*atl="Sketch"*/ alt="alternative text" title="Sketch" height="96"/>
          </li>
          <li>
            <img src="https://i.pinimg.com/280x280_RS/0f/b8/e6/0fb8e676a1cd0eae9b0f7ea862c40f93.jpg" /*alt="Trello"*/ alt="alternative text" title="Trello" height="96"/>
          </li>
          <li>
            <img src="https://cdn.auth0.com/blog/build-a-secure-express-api-using-postman-and-auth0/postman-logo.png" /*alt ="postman"*/ alt="alternative text" title="Postman" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/000000/stackoverflow.png" /*alt="stackoverflow"*/ alt="alternative text" title="stackoverflow"/>
          </li>
          <li>
            <img src="https://pbs.twimg.com/profile_images/687314343537569792/Hz7m5vRM_400x400.png" /*alt="milligram"*/ alt="alternative text" title="Milligram" height="96"/>
          </li>
          <li>
            <img src="https://img.icons8.com/windows/64/000000/bootstrap.png" /*alt="bootstrap"*/ alt="alternative text" title="Bootstrap" height="96"/>
          </li>
        </ul>
      </div>
    </div>
      <h3 class="Projects" id="ProjectsLink">PROJECTS</h3>
      <h5 class="uiHelp">Hover over project for more info</h5>
      <div class="Project_4">
          <img src="https://i.imgur.com/IHINH9U.png" alt="Adulting"/>
          <div class="center">
            <a href="https://github.com/lydiamoore35/Project_3_frontend" target="_blank" rel="noreferrer"><button class="GitButton">GitHub</button></a>
            <a href="https://ubuntu-project-3.netlify.app" target="_blank" rel="noreferrer"><button class="SiteButton">Visit Site</button></a>
            <div class="Project_4_text">
              <u><b>Ubuntu</b></u><br></br>I am because we are<br></br><br></br>Ubuntu is a full CRUD application that uses MERN stack technoglogy. The backend is organized using MVC file structure and has sign up and log in functionality. I deployed Ubuntu front end and back end through Netlify and Heroku, respectively.
            </div>
          </div>
        </div>
        <div class="Project_3">
          <img src="https://i.imgur.com/yFYcW1H.png" alt="project_3_pic"/>
          <div class="center">
            <a href="https://github.com/lydiamoore35/Project_3_frontend" target="_blank" rel="noreferrer"><button class="GitButton">GitHub</button></a>
            <a href="https://ubuntu-project-3.netlify.app" target="_blank" rel="noreferrer"><button class="SiteButton">Visit Site</button></a>
            <div class="Project_3_text">
              <u><b>Ubuntu</b></u><br></br>I am because we are<br></br><br></br>Ubuntu is a full CRUD application that uses MERN stack technoglogy. The backend is organized using MVC file structure and has sign up and log in functionality. I deployed Ubuntu front end and back end through Netlify and Heroku, respectively.
            </div>
          </div>
        </div>
        <div class="Project_2">
          <img src="https://i.imgur.com/bUdBwlY.png?1" alt="project_2_pic"/>
          <div class="center">
          <a href="https://github.com/lydiamoore35/Project-2-frontend" target="_blank" rel="noreferrer"><button class="GitButton">GitHub</button></a>
          <a href="https://lm-project-2.herokuapp.com" target="_blank" rel="noreferrer"><button class="SiteButton">Visit Site</button></a>
            <div class="Project_2_text">
              <u><b>Create your Cookbook</b></u><br></br><br></br>I built this application using HTML, CSS, Node.js, Mongoose, Express, and EJS. This app adheres to MVC file structure, 7 RESTful routes and full CRUD. The sign up and log in functionality includes an encrypted password and authorization flow. I deployed this site through Heroku.
            </div>
          </div>
        </div>
        <div class="Project_1">
          <img src="https://i.imgur.com/hs6xZvs.png" alt="project_1_pic"/>
          <div class="center">
            <a href="https://github.com/lydiamoore35/Project-1" target="_blank" rel="noreferrer"><button class="GitButton">GitHub</button></a>
            <a href="https://lydiamoore35.github.io/Project-1/" target="_blank" rel="noreferrer"><button class="SiteButton">Visit Site</button></a>
            <div class="Project_1_text">
              <u><b>WeatherWize</b></u><br></br><br></br>I built WeatherWize using HTML, CSS, JavaScript and JQuery, hosted on github pages. I used AJAX to request a weather API based on zip code. Once the user inputs their zipcode, the browser renders youth activities based on the tempurature. WeatherWize has a responsive design and complex user interface.
            </div>
          </div>
        </div>
        <h3 class="Contact" id="ContactLink">CONTACT INFO</h3>
          <div class="ContactInfo">
            <div>Lydia Moore</div>
            <div>Lydiamoore35@gmail.com</div>
            <div>720-323-4928</div>
          </div>
    
  </Layout>
)

export default IndexPage
