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

        <div className="outer-nav" id="outer-nav">
            <NavBar />
        </div >        
        
        {/* Header section */}
        <header className='header'>
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
        </header>

        {/* About me section */}
        <div className='about-div' id='about-div'>
          <h2> About me </h2>
              <h4>
                Web Developer | Project Management
              </h4>
          <div id='about-text'>
              <p id='about-para'>
              As someone who has always had passion for games growing up, I've always been fascinated with any kind of puzzle or problem I could try to solve. 
              From console games to computer games, I've always been obsessed with figuring out the most optimal ways of winning or playing. 
              FlatIron was an the perfect place to transition those passions into meaningful skills. 
              Leaving my previous career in Project Management to pursue Software Development has enabled me to create unique projects that revolve around my interests. 
              Data Management and optimization have always been at the forefront of how I play games and lead my professional development, so finding a position in this field is my dream.
              </p>
          </div>
        </div>

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

        {/* Tech Skills */}
        {/* <div>
          <h2>
            Tech Skills
          </h2>
          <div className='techskills-container'>
            {

              techSkills.map(mappedTech => {
                return (<TechSkills key={mappedTech.id} mappedTech={mappedTech} />)
              })
            }  
          </div>
        </div> */}

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
