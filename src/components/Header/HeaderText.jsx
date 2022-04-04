import React from 'react'
import  './header.css'

const HeaderText = () => {
  return (
    <>
    <div className='header-text'>
    <h2>WELCOME TO OUR TEMPLE</h2>
    <h1>CONNECTED MUSCLES</h1>
    <div><a href="#about" className='btn'>Discover</a></div>
    </div>
    <div className='header-footer'>
    <div className='box'><p className='scroll-point'>.</p></div>
    <a href='#about' className='scroll-link'>Scroll Down</a>
    </div>
    </>
  )
}

export default HeaderText