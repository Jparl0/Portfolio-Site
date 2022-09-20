import React from 'react'

function NavBar() {
  return (
    <div className="inner-nav" id="inner-nav">
        <ul>
            <li>
                <h5>
                    <a href="#aboutSection">
                    About
                    </a>
                </h5>
            </li>
            <li>
                <h5>
                    <a href="#projectSection">
                    Projects
                    </a>
                </h5>
            </li>
            <li>
                <h5>
                    <a href="#contactMe">
                    Contact
                    </a>
                </h5>
            </li>
        </ul>
    </div>
  )
}

export default NavBar