import React from 'react'
import  './header.css'
import { Link } from 'react-scroll'
const HeaderText = () => {
  return (
    <>
    <div className='header-text'>
    <h2>WELCOME TO OUR TEMPLE</h2>
    <h1>CONNECTED MUSCLES</h1>
    <div><Link to="about" smooth='true' className='btn header-btn'>Discover</Link></div>
    </div>
    <div className='header-footer'>
    <div className='box'><p className='scroll-point'>.</p></div>
    <Link to='about'  smooth='true'className='scroll-link'>Scroll Down</Link>
    </div>
    </>
  )
}

export default HeaderText