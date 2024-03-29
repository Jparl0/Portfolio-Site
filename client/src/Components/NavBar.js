import React from 'react'

function NavBar() {
  return (
    // Nav Bar HTML with links to social accounts
    <div className="inner-nav" id="inner-nav">
        <ul className='nav-list'>
            <li className='nav-list-li'>
                <a className='nav-list-links' href='https://www.linkedin.com/in/joey-parlamenti/'>
                    LinkedIn
                </a>
            </li>
            <li className='nav-list-li'>
                <a className='nav-list-links' href='https://github.com/Jparl0'>
                    GitHub
                </a>
            </li>
            <li className='nav-list-li'>
                <a className='nav-list-links' href="#projects-div">
                    Projects
                </a>
            </li>
            <li className='nav-list-li'>
                <a className='nav-list-links' href="#about-div">
                    About
                </a>
            </li>
            <li className='nav-list-li'>
                <a className='nav-list-links' href="#contact-div">
                    Contact
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar