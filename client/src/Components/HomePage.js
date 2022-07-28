import React from 'react'
import NavBar from './NavBar'

function HomePage() {
  return (
    <div className="banner" id="banner">
        <header className='header'>
          <div>
              <NavBar />
          </div>
            <h1 id='welcome-text'>
              Welcome!
            </h1>
            <h3>
                I'm Joey, a software engineer in Manhattan 
            </h3>
            <button>
              Contact Me
            </button>
        </header>
        <p>
          Sections under here
        </p>
        <div>
          Project section
        </div>
        <div>
          Contact Section
        </div>
    </div>
  )
}

export default HomePage