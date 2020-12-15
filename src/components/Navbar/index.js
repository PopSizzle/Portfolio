import React from 'react';

function Navbar() {
return(
  <div>
    <nav className='navbar navbar-expand-lg text-center'>
      <div className='collapse navbar-collapse' id='navDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='navlink' href='/about'>About</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/projects'>Projects</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/resume'>Resume</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
}

export default Navbar;