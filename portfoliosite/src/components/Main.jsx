import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className='mainBody'>
      <h1>Home</h1>
    <div className='leftCardContainer'>
       <p className='cardTitle'>Frontend Dev </p> 
       <div className='whiteLine'/>
       <p>Innovative | Collaborative | Adaptable </p> 
    </div>

    <div className='aboutMeContainer'>
        <Link to="/AboutMe" className='aboutMeBtn'>About Me <SlArrowRight style={{scale: "80%", marginLeft: "auto"}} /></Link>
    </div>



     

    </div>
  )
}

export default Main