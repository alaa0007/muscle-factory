import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/Images/logoWithoutBg.png';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isActive, setIsActive] = useState('#');
  const [isNavActive, setIsNavActive] = useState(false);
  const[isMobile, setIsMobile] = useState(false);


  const changeNavBg = () => {
    if(window.scrollY >= 160) {
      setIsNavActive(true);
    }else{
      setIsNavActive(false);
    }
  }

  window.addEventListener('scroll', changeNavBg);

  
  return (
    <nav className={ isNavActive === true ? 'active' : '' }>

        <ul className={ isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={ () => setIsMobile(false) } >
            <li className='navbar_item'><a href="#" onClick={ () => setIsActive('#') }  className={ isActive ==="#" ? 'active' : '' }> Home </a></li>
            <li className='navbar_item'><a href="#about" onClick={ () => setIsActive('#about') }  className={ isActive ==="#about" ? 'active' : '' }> About </a></li>
            <li className='navbar_item'><a href="#activities" onClick={ () => setIsActive('#activities') }  className={ isActive ==="#activities" ? 'active' : '' }> Activities </a></li>
            <li><a href="#"><img src={ logo } alt="muscleFactoryLogo" className='navbar_logo' onClick={ () => setIsActive('#') }/></a></li>
            <li className='navbar_item'><a href="#coaches" onClick={ () => setIsActive('#coaches') }  className={ isActive ==="#coaches" ? 'active' : '' }> Coaches </a></li>
            <li className='navbar_item'><a href="#contact" onClick={ () => setIsActive('#contact') }  className={ isActive ==="#contact" ? 'active' : '' }> Contact </a></li>
            <li><button className='btn btn-navbar'>Login</button></li>
        </ul>
        <div className='small-device'>
        <h4 className='mobile-logo'>muscle factory</h4>
        <a className='mobile-menu' onClick={ () => setIsMobile(!isMobile) } >
        { isMobile  ? <AiOutlineClose /> : <AiOutlineMenuFold /> }
        </a>
        </div>
    </nav>
  ) 
}

export default Navbar