import React from 'react'
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
      <div >
        <Link to="/"><h2 className='abtMeH2'>
            Back
        </h2></Link>
        
        <h1 className='abtMeH1'>About Me</h1> 

    <div className='aboutMeBody'>
        <div className='aboutMeTextContainer'>
            <p>As an individual with a deep passion for creativity, I've spent over seven years immersed in the world of music, particularly specializing in instrumental hip-hop, where my artistic expression flows freely. 
                Beyond the realm of beats and melodies, I find joy in creating captivating narratives and immersive experiences as both a player and game master in Dungeons and Dragons for the past three years. 
                This unique blend of storytelling and game design has allowed me to continuously innovate and tailor engaging encounters that bring people together around the table.
                 Currently on a journey in Front-End development, I am drawn to the dynamic fusion of creativity and technicality, channeling my empathic and innovative spirit into crafting stylish and intuitive websites.
                 My goal is to not just build websites but to create digital experiences that resonate with users, making every interaction memorable and enjoyable.</p>
        </div>
    </div>


    </div>
  )
}

export default AboutMe