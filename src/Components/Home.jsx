import Navbar from './Navbar.jsx'
import shinchan from "../assets/Shinchan_Main.png"
import github from '../assets/github.jpg'
import leetcode from '../assets/leetcode.jpg'
import linkedin from '../assets/linkedin.jpg'
import instagram from '../assets/instagram.jpg'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
const Home = ({ onNext, onPrev,onProject,onAbout,onContact }) => {
  return (
    <div className='home'>
      <Navbar onProject={onProject} onAbout={onAbout} onContact={onContact}/>
      <div className='main'>
        <motion.div 
          initial={{x:'-100vw',opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{type:'spring',stiffness:60,duration:0.8,delay:0.3}}
          className='hero'>
          <p>WELCOME TO MY WORLD</p>
          <h1>Hi, I'm Tanmay Shinde</h1>
          <p>
            I'm a passionate developer skilled in Web Development, DSA, and Machine Learning.
            I love building responsive web apps, solving coding problems, and exploring intelligent systems.
            Always learning, always building — turning ideas into smart, functional solutions.
          </p>
          <div className='main-button'>
            <button className='project-button' onClick={onProject}>My Projects</button>
            <a href="https://drive.google.com/file/d/1edzwAbSDQqwBmqa3iSrqP8VUdLBLmjor/view?usp=sharing" target='_blanck'>
              <button className='cv-button'>Download CV</button>
            </a>
            
          </div>
          <div className='connections'>
            <a href="https://github.com/Tanmay7644" target='_blanck'><img src={github} alt=""  /></a>
            <a href="https://leetcode.com/u/TanmayShinde/" target='_blanck'><img src={leetcode} alt="" /> </a>
            <a href="https://www.linkedin.com/in/tanmay-shinde-768a0825a/" target='_blanck'><img src={linkedin} alt="" /></a>
            <a href="https://www.instagram.com/tanmay.7644/" target='_blanck'><img src={instagram} alt="" /></a>         
          </div>
        </motion.div>
        <motion.div 
          initial={{x:'100vw',opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{type:'spring',stiffness:60,duration:0.8,delay:0.3}}
          className='shinchan'>
          <img src={shinchan} alt="" />
        </motion.div>
      </div>
      {onPrev && (
        <button className='prev-section-button' onClick={onPrev}>Previous</button>
      )}
      {onNext && (
        <button className='home-next' onClick={onNext}>
          <FontAwesomeIcon icon={faArrowDown} style={{fontSize:"20px"}}/> 
        </button>
      )}   

      
    </div>
  )
}

export default Home