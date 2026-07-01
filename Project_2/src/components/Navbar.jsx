import React from 'react'
import './Navbar.css'
import style from './Navbar.module.css'

const Navbar = () => {
  
  return (
    <nav className={`${style.navigation}`}>
        <div>
            <img className='w-25' src="/public\Frame.png" alt="logo image" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar