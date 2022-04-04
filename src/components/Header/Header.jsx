import React from 'react';
import './header.css';
import HeaderText from './HeaderText';
import SocialMediaBtn from './SocialMediaBtn';

const Header = () => {
  return (
    <section className='hero' id='header'>
      <HeaderText />
      <SocialMediaBtn />
    </section>
  )
}

export default Header