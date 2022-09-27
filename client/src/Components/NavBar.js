import React from 'react'

function NavBar() {
  return (
    <div className="inner-nav" id="inner-nav">
        <ul className='nav-list'>
            <li>
                <a href="#projects-container">
                    Projects
                </a>
            </li>
            <li>
                <a href="#aboutSection">
                    About
                </a>
            </li>
            <li>
                <a href="#contactMe">
                    Contact
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar