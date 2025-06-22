import React from 'react'
import './NavBar.css';
import Image from 'next/image';
import logo from '../../../../public/Logo.png';
import logoText from '../../../../public/LogoText.png';
import icons from '../../../../public/Icons.png'

function NavBar() {
  return (
    <div className='container'>
        <div className='logo-container'>
          <div className='logo-row'>  
            <Image alt='Company Logo' src={logo}/>
            <Image alt='Company Name' src={logoText}/>
            <Image alt='Icons' src={icons}/>
           </div>
        </div>
        <div className='nav-bar'>
            <div className='nav-tabs'>
                <nav>
                    <ul className="navbar">
                        <li><a href='#'>SHOPS</a></li>
                        <li><a href='#'>SKILLS</a></li>
                        <li><a href='#'>STORIES</a></li>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>CONTACT US</a></li>
                    </ul>
                </nav>
                <div className='separator'></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar