import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Projects from './Projects'
// import TechSkills from './TechSkills'
import HeaderPic from './images/header_pic.png'

function HomePage() {

  const [projectsData, setProjectsData] = useState([])

  //TEMPORARY USE UNTIL RUBY SET UP FOR DEPLOYMENT
  //after page load, sets state of projectData to the array of objects below
  useEffect(() => {
    setProjectsData([
      {
        id: 1,
        title: "Satisfactory Planner", 
        img_src: "./images/Satisfactory.jpeg", 
        link: "https://github.com/Jparl0/Satsifactory-Planner-2.0",
        description: "This app allows players of the video game Satisfactory to visualize the game's data based on their personal factory systems to assist in strategizing future planning."
      }, 
      { 
        id: 2,
        title: "DC2 Text Scrapper", 
        img_src: "./images/github.png", 
        link: "https://github.com/Jparl0/Dark-Cloud-2-Web_Scraper",
        description: "Using Go, this application combs over a single page application searching for specific information. This information is then categorized and stored in a database for later use."
      } 
      // {
      //   id: 3,
      //   title: "DC2 Data Manager", 
      //   img_src: "./images/github.png",
      //   link: "https://github.com/Jparl0/Dark-Cloud-2-Data-Tracker", 
      //   description: "Still in development!"    
      // }, 
      // {
      //   id: 4,
      //   title: "Grocery-Tracker", 
      //   img_src: "./images/github.png",
      //   link: "https://github.com/Jparl0", 
      //   description: "Still in development!"
      // }
    ])
  }, [])

  return (
    <div className="main-page" id="main-page">

        {/* Header Section */}
        <header className='header'>
          {/* Nav Bar component */}
          <div className="outer-nav" id="outer-nav">
              <NavBar />
          </div >        
          <div className='header-text'>
            <h1 id='welcome-text'>
              Welcome!
            </h1>
            <h3>
                I'm Joey Parlamenti, a Full-Stack Web Developer based in Manhattan, New York.
            </h3>
            <button>
              <a href="#contact-div">
                Contact Me
              </a>
            </button>
          </div>
          <div className='img-header'>
            <img src={HeaderPic}/>
          </div>
        </header>

        {/* About-me section */}
        <div className='about-div' id='about-div'>
          <h2> About me </h2>
              <h4>
                Web Developer | Project Management
              </h4>
          <div id='about-text'>
              <p id='about-para'>
              As someone who has always had a passion for games growing up, I've developed a fascination with any kind of puzzle or problem I could try to solve. 
              From console games to computer games, my obsession with figuring out the most optimal ways of winning or playing has permeated any and all types of interactive entertainment I engage with. 
              FlatIron School's Software Engineering program was the perfect place to transition those strong desires to find solutions and optimize processes into meaningful skills. 
              Leaving my previous career in Project Management to pursue Software Development has enabled me to create unique projects that revolve around my interests. 
              Data Management and optimization have always been at the forefront of how I play games and lead my professional development so finding a position that allows me to develop and hone these skills is key to my long-term success in the field.
              </p>
          </div>
        </div>

        {/* Projects section with Projects Component */}
        <div className="projects-div" id="projects-div">
          <h2>
              Projects
          </h2>
          <div className='projects-container'>
            {
              // Maps over the Array of Objects set above to dynamically render each Project with corresponding information
              projectsData.map(mappedProj => {
                return (<Projects key={mappedProj.id} mappedProj={mappedProj}/>)
              }) 
            }
          </div>
        </div>

        {/* Tech Skills Component*/}
        {/* <div>
          <h2>
            Tech Skills
          </h2>
          <div className='techskills-container'>
            <TechSkills />
          </div>
        </div> */}

        {/* Contact-me section */}
        <div className="contact-div" id="contact-div">
          <h3>
            Contact me here 
          </h3>
           JoeyParlamenti@gmail.com
        </div>
    </div>
  )
}

export default HomePage