import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className='mainBody'>
      

    <div className='leftCardContainer'>
       <p className='cardTitle'>Frontend Dev </p> 
       <div className='whiteLine'/>
       <p>Innovative | Collaborative | Adaptable </p> 
    </div>

    <div className="aboutMeContainer">
  <a href="/AboutMe" className="aboutMeBtn">
    About Me <SlArrowRight style={{ scale: '80%', marginLeft: 'auto' }} />
  </a>
</div>



     

    </div>
  )
}

export default Main