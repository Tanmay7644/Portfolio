import { useState } from 'react'
import arrowUp from '../assets/arrow-up-stroke.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import Bye from '../assets/Bye.png'
import shinchan from '../assets/Shinchan.gif'
const Form = ({ onNext, onPrev }) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const handleSubmit =()=>{
        setName("");
        setEmail("");
        setMessage("");
    }
    
    return (
        <div className='form'>
            <h1>Contact</h1>
            <div className='form-box'>
                <div className='form-img'>
                    <h1>Lets Create Something Amazing Together</h1>
                    <img src={shinchan} alt="" />
                </div>
                <div className='form-text'>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Name:</h1>
                        <input type="text" placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}/>
                        <h1>Email:</h1>
                        <input type="email" placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                        <h1>Message:</h1>
                        <textarea name="" id="" placeholder='Enter Message' onChange={(e)=>{setMessage(e.target.value)}}>
                        </textarea>
                        <button className='form-button' >Send Message</button>
                    </form>
                </div>
            </div>

            {onPrev && (
                <button className='form-prev' onClick={onPrev}>
                    {/* <img src={arrowUp} alt="" /> */}
                    <FontAwesomeIcon icon={faArrowUp} style={{fontSize:"20px"}}/> 
                </button>
            )}
            {onNext && (
                <button className='next-section-button' onClick={onNext}>Next</button>
            )}

        </div>
    )
}



export default Form
