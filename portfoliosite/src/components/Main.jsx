import React from 'react'
import { SlArrowRight } from "react-icons/sl"
const Main = () => {
  return (
    <div className='mainBody'>

    <div className='leftCardContainer'>
       <p className='cardTitle'>Frontend Dev </p> 
       <div className='whiteLine'/>
       <p>Innovative | Collaborative | Adaptable </p> 
    </div>

    <div className='aboutMeContainer'>
        <a href="" className='aboutMeBtn'>About Me <SlArrowRight style={{scale: "80%", marginLeft: "auto"}} /></a>
    </div>

    <div className='projectsContainer'>
        <a href="" className='projectsBtn'>Projects <SlArrowRight style={{"scale": "80%", marginLeft: "auto"}} /></a>
    </div>

    </div>
  )
}

export default Main