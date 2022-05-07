import React, { useEffect } from 'react';
import './header.css';
import HeaderText from './HeaderText';
import SocialMediaBtn from './SocialMediaBtn';

const Header = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }
  ,[])

  return (
    <section className='hero' id='header'>
      <HeaderText />
      <SocialMediaBtn />
      <div className="elfsight-app-3051117f-80be-487d-b0d2-f1beeb343975"></div>
      <div className="elfsight-app-1a9908e1-32cd-428f-9ff0-ee8e0942ac1f"></div>
    </section>
  )
}

export default Header