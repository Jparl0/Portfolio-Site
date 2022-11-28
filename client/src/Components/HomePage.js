import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Projects from './Projects'
// import Satisfactory from './images/Satisfactory.jpeg'
// import DNDcrawl from './images/DNDcrawl.jpeg'

function HomePage() {

  const [projectsData, setProjectsData] = useState([])

  // console.log(projectsData)


  // INVOKE THIS ONCE RUBY POSTGRESQL IS SET UP WITH RENDER.COM
  // useEffect(() => {
  //   fetch('/projects')
  //   .then(r => r.json())
  //   .then(projectsFetched => {
  //     console.log(projectsFetched)
  //     setProjectsData(projectsFetched)
  // })
  // }, [])


  //TEMPORARY USE UNTIL RUBY SET UP FOR DEPLOYMENT
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
        link: "https://github.com/Jparl0",
        description: "A simplified dungeon adventure game with various selectable classes, items and dynamic rooms selection. Select a class and find the dragon to win the game!"
      }, 
      {
        id: 3,
        title: "DC2 Data Manager", 
        img_src: "./images/github.png",
        link: "https://github.com/Jparl0/Dark-Cloud-2-Data-Tracker", 
        description: ""    
      }, 
      {
        id: 4,
        title: "Grocery-Tracker", 
        img_src: "./images/github.png",
        link: "https://github.com/Jparl0", 
        description: ""
      }
    ])
  }, [])

  return (
    <div className="main-page" id="main-page">

        <div className="outer-nav" id="outer-nav">
            <NavBar />
        </div >        
        
        {/* Header section */}
        <header className='header'>
            <h1 id='welcome-text'>
              Welcome!
            </h1>
            <h3>
                I'm Joey, a software engineer in Manhattan, New York.
            </h3>
            <button>
              <a href="#contact-div">
                Contact Me
              </a>
            </button>
        </header>

        {/* Projects section */}
        <div className="projects-div" id="projects-div">
          <h2>
              Projects
          </h2>
          <div className='projects-container'>
            {
              projectsData.map(mappedProj => {
                return (<Projects key={mappedProj.id} mappedProj={mappedProj}/>)
              }) 
            }
          </div>
        </div>

        {/* About me section */}
        <div className='about-div' id='about-div'>
          <h3> About me </h3>
          <div id='about-text'>
              <p>
                My name is Joey Parlamenti and I'm a Manhattan based developer looking for remote/hybrid work in the NYC area. 
                With my graduation from FlatIron School in Software Engineering in June 2022, I believe I have been given the tools to succeed in the Software Developement industry.
                Currently I'm learning Go and trying to utilize it to build a basic Text Scraper program.
              </p>
          </div>
        </div>

        {/* Contact me section */}
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






// dndProj = Project.create(
//  {
//   title: "DnD Crawl", 
//   link: "./images/DNDcrawl.jpeg", 
//   description: "A simplified dungeon adventure game with various selectable classes, items and dynamic rooms selection. Select a class and find the dragon to win the game!"
// }
// satisProj = Project.create(
  // title: "Satisfactory Planner", 
  // link: "./images/Satisfactory.jpeg", 
  // description: "This app allows players of the video game Satisfactory to visualize the game’s data based on their personal factory systems to assist in strategizing future planning."

//)
// dc2DataTracker = Project.create(
  // title: "DC2 Data Manager", 
  // link: "./images/Satisfactory.jpeg", 
  // description: ""

// )

// groceryTracker =  Project.create(
  // title: "Grocery-Tracker", 
  // link: "./images/Satisfactory.jpeg", 
  // description: ""
// )
