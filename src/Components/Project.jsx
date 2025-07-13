import React, { useState } from 'react'
import { motion } from 'framer-motion'
import codeWorld from '/codeWorld.mp4'
import minuteNews from '/MinuteNews.mp4'
import foodHunt from '/FoodHunt.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown,faArrowUp} from '@fortawesome/free-solid-svg-icons'
const Project = ({ onNext, onPrev }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 3)
      return updatIndexes
    })
  }

  const images = [ codeWorld,foodHunt,minuteNews];

  const positions = ['center', 'left1', 'right1'];

  const links=[
    "https://github.com/Tanmay7644/New-Project",
    "https://github.com/Tanmay7644/Food-Delivery",
    "https://github.com/Tanmay7644/Minute-News"
  ];
  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-70%', scale: 0.7, zIndex: 2 },
    right1: { x: '70%', scale: 0.7, zIndex: 2 }
  }
  const names=['CodeWorld','FoodHunt','MinuteNews'];
  return (
    <div className='project'>
      <h1 className='project-headline'>Project</h1>

      <div className='project-carousel'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial="center"
            className='project-image'
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
          <h1>{names[index]}</h1>
          <video src={images[index]} 
          autoPlay 
          loop 
          muted 
          ></video>
          <a href={links[index]} target='_blanck'>
            <button>Code</button>
          </a>
          
          </motion.div>
        ))}

        <button className='next-button'  onClick={handleNext}>Next</button>
      </div>
      <div className='project-buttons'>
      
         {onPrev && (
            <button className='project-prev' onClick={onPrev}>
              <FontAwesomeIcon icon={faArrowUp} style={{fontSize:"20px",color:"white"}}/> 
            </button>
          )}
          {onNext && (
            <button className='project-next' onClick={onNext}>
              <FontAwesomeIcon icon={faArrowDown} style={{fontSize:"20px"}}/> 
            </button>
          )}
        </div>
     </div>
  )
}

export default Project
