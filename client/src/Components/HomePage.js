import React from 'react'
// import NavBar from './NavBar'
import Projects from './Projects'

function HomePage() {
  return (
    <div className="main-page" id="main-page">
        <header className='header'>
          {/* <div className="outer-nav" id="outer-nav">
              <NavBar />
          </div > */}
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
        <div className="projects-div" id="projects-div">
          <h2>
              Projects
          </h2>
          <div className='projects-container'>
            <Projects />
          </div>
        </div>
        <div className='about-div'>
          <h3> About me </h3>
          <p>
            Insert brief description about self here
          </p>
        </div>
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