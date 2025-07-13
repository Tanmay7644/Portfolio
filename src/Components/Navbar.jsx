import React from 'react'
import "./All.css"
import logo from '../assets/logo.png'
const Navbar = ({onProject,onAbout,onContact}) => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='navbar-links'>
            <button>Home</button>
            <button onClick={onAbout}>About</button>
            <button onClick={onProject}>My Projects</button>
        </ul>
        <button className='navbar-contact' onClick={onContact}>Contact</button>
    </div>
  )
}

export default Navbar
