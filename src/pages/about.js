import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  
  return(
    
    <div>
      <Navbar> 
      </Navbar>
      <img src='./assets/profilepic.jpg' alt='Profile picture of Sam Poppe'/>
      <p>
        I'm Sam Poppe, a full stack web developer looking to join a team where I can make an impact and grow my skills. I recently graduated from a coding class at the UC Berkeley Extension where I learned HTML, CSS, Javascript, React, Node, Express, MongoDB, and MySQL, among other things.
      </p>
    </div>
  )
}

export default About;