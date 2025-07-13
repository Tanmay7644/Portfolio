
import shinchanAbout from '../assets/Shinchan_About.png'
import sql from '../assets/sql.jpg'
import react from '../assets/react.jpg'
import js from '../assets/js.jpg'
import css from '../assets/css.jpg'
import html from '../assets/html.jpg'
import mongodb from '../assets/mongodb.jpg'
import cpp from '../assets/cpp.jpg'
import c from '../assets/c.jpg'
import nodejs from '../assets/nodejs.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown,faArrowUp} from '@fortawesome/free-solid-svg-icons'
const About = ({ onNext, onPrev }) => {
    return (
        <div className='about'>
            
            <h1>About Me</h1>
            <div className='about-main'>
                <div className='about-img'>
                    <img src={shinchanAbout} alt="" />
                </div>

                <div className='about-text'>
                    <p>Hello! I'm Tanmay Shinde, a BTech student with a deep interest in technology and innovation. 
                        I enjoy building practical solutions, exploring new tools, and continuously improving my technical knowledge. 
                        This portfolio showcases the projects and experiences that reflect my learning journey so far.</p>
                    <p>My core areas of interest include Web Development, Data Structures and Algorithms (DSA), and Machine Learning. 
                        I enjoy developing responsive web applications, solving complex coding problems, and experimenting with machine 
                        learning models to draw insights from data.</p>
                    <p>I'm always open to new challenges and opportunities that push me to grow as a developer. Thank you for visiting 
                        my portfolio — feel free to explore my work and get in touch!</p>
                </div>
            </div>

            <h1>Skills</h1>
            <div className='skills-top'>
                <div className='skill'>
                    <img src={html} alt="" /> 
                    <p className='skill-name'>HTML</p>
                </div>
                <div className='skill'>
                    <img src={css} alt="" /> 
                    <p className='skill-name'>CSS</p>
                </div>
                <div className='skill'>
                    <img src={js} alt="" /> 
                    <p className='skill-name'>JS</p>
                </div>
                <div className='skill'>
                    <img src={react} alt="" /> 
                    <p className='skill-name'>React</p>
                </div>
                <div className='skill'>
                    <img src={sql} alt="" /> 
                    <p className='skill-name'>SQL</p>
                </div>
                
            </div>
            <div className='skills-bottom'>
                <div className='skill'>
                    <img src={mongodb} alt="" /> 
                    <p className='skill-name'>MongoDB</p>
                </div>
                <div className='skill'>
                    <img src={cpp} alt="" /> 
                    <p className='skill-name'>C++</p>
                </div>
                <div className='skill'>
                    <img src={c} alt="" /> 
                    <p className='skill-name'>C</p>
                </div>
                <div className='skill'>
                    <img src={nodejs} alt="" /> 
                    <p className='skill-name'>NodeJS</p>
                </div>
            </div>
            <div className='about-button'>
                {onPrev && (
                    <button className='about-prev' onClick={onPrev}>
                        <FontAwesomeIcon icon={faArrowUp} style={{fontSize:"20px"}}/> 
                    </button>
                )}
                {onNext && (
                    <button className='about-next' onClick={onNext}>
                        <FontAwesomeIcon icon={faArrowDown} style={{fontSize:"20px"}}/> 
                    </button>
                )}
            </div>
        </div>
    )
}

export default About
