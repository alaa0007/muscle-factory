import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/Images/logoWithoutBg.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isActive, setIsActive] = useState('#');
  const [isNavActive, setIsNavActive] = useState(false);
  const changeNavBg = () => {
    if(window.scrollY >= 160) {
      setIsNavActive(true);
    }else{
      setIsNavActive(false);
    }
  }

  window.addEventListener('scroll', changeNavBg);

  return (
    <nav className={isNavActive === true ? 'active' : ''}>
        <ul>
            <li className='navbar_item'><a href="#" onClick={ () => setIsActive('#') }  className={isActive ==="#" ? 'active' : ''}><span className='item'>Home</span> </a></li>
            <li className='navbar_item'><a href="#about" onClick={ () => setIsActive('#about') }  className={isActive ==="#about" ? 'active' : ''}>About</a></li>
            <li className='navbar_item'><a href="#activities" onClick={ () => setIsActive('#activities') }  className={isActive ==="#activities" ? 'active' : ''}>Activities</a></li>
            <li><a href="#"><img src={ logo } alt="muscleFactoryLogo" className='navbar_logo' onClick={ () => setIsActive('#') }/></a></li>
            <li className='navbar_item'><a href="#coaches" onClick={ () => setIsActive('#coaches') }  className={isActive ==="#coaches" ? 'active' : ''}>Coaches</a></li>
            <li className='navbar_item'><a href="#contact" onClick={ () => setIsActive('#contact') }  className={isActive ==="#contact" ? 'active' : ''}>Contact</a></li>
            <li><a href=""  className='btn'>Login</a></li>
        </ul>
    </nav>
  ) 
}

export default Navbar