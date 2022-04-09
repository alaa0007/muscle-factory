import React from 'react';
import './header.css';
import HeaderText from './HeaderText';
import SocialMediaBtn from './SocialMediaBtn';

const Header = () => {
  return (
    <section className='hero' id='header'>
      <HeaderText />
      <SocialMediaBtn />
      <div className="elfsight-app-1a9908e1-32cd-428f-9ff0-ee8e0942ac1f"></div>
    </section>
  )
}

export default Header