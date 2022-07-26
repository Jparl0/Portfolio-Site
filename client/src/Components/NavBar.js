import React from 'react'

function NavBar() {
  return (
    <div className="inner-nav" id="inner-nav">
        <ul className='nav-list'>
            <li>
                <a href='https://www.linkedin.com/in/joey-parlamenti/'>
                    LinkedIn
                </a>
            </li>
            <li>
                <a href='https://github.com/Jparl0'>
                    GitHub
                </a>
            </li>
            <li>
                <a href="#projects-div">
                    Projects
                </a>
            </li>
            <li>
                <a href="#about-div">
                    About
                </a>
            </li>
            <li>
                <a href="#contact-div">
                    Contact
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar