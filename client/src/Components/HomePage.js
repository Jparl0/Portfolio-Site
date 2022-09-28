import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Projects from './Projects'

function HomePage() {

  const [projectsData, setProjectsData] = useState([])

  // console.log(projectsData)

  useEffect(() => {
    fetch('/projects')
    .then(r => r.json())
    .then(projectsFetched => {

      // console.log(projectsFetched)
      setProjectsData(projectsFetched)
  
  })
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
        <div className='about-div'>
          <h3> About me </h3>
          <div id='about-text'>
              <p>
                Insert brief description about self here
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