import React from 'react';
import './header.css';
import { GrFacebook } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';

const Header = () => {
  return (
    <section className='hero' id='header'>
      <div className='header-text'>
      <h2>WELCOME TO OUR TEMPLE</h2>
      <h1>CONNECTED MUSCLES</h1>
      <div><a href="#about" className='btn'>Discover</a></div>
      </div>
      <div className='header-footer'>
      <div className='box'><p className='scroll-point'>.</p></div>
      <a href='#about' className='scroll-link'>Scroll Down</a>
      </div>
      <div className='social-media'>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><GrFacebook/></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram/></a>
      </div>
    </section>
  )
}

export default Header